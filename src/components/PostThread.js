import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as threadActionCreators from '../actions/thread';
import * as modalActionCreators from '../actions/modal';
import { ANSWER_POST_MODAL } from '../actions/types';
import Answer from './Answer';

import { Loader } from 'semantic-ui-react';
import style from '../../style/components/postThread.css';

/**
 * This is the post thread container which holds a specific post along with all comments
 */
class PostThread extends Component {

    constructor(props) {
        super(props);

        this.onUpvoteClick = this.onUpvoteClick.bind(this);
        this.onBookmarkClick = this.onBookmarkClick.bind(this);
    }

    /**
     * parse date to readable string
     */
    parseDate(date){
        let postDate = new Date(date);
        return postDate.toDateString();
    }

    /**
     * Fetch post details and comments pertaining to a selected post
     */
    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.fetchSpecificPost(id);
        window.scroll(0,0);
    }


    /**
     * Make sure all modals are unmounted when the parent component unmounts
     */
    componentWillUnmount() {
        this.props.hideModal();
    }

    /**
     * Display the answer component on the same page to allow user
     * to answer question
     */
    displayAnswerComponent() {
        this.props.showModal(ANSWER_POST_MODAL);
    }

    onBookmarkClick() {
        console.log('you just bookmarked the post');
    }

    onUpvoteClick() {
        console.log('you just upvoted this post');
    }
 
    /**
     * Create elements to contain all answers
     */
    renderAnswers() {
        let postAnswers = this.props.selectedPost.selected.answers;

        if(postAnswers.length === 0) {
            return (
                <div className={style.answerContainer}>Be the first to answer this question.</div>
            )
        }

        return postAnswers.map((value, index) => {
            return (
                <Answer key={index} date={this.parseDate(value.date)} answer={value.answer} user={value.user}/>
            )
        });
    }

    render() {
        //return loading if data is not returned
        if(this.props.selectedPost.isLoadingPost) {
            return (
                <div className={style.postThreadContainer}>
                    <Loader active inline="centered" className={style.threadLoader}>Loading</Loader>
                </div>
            )
        }

        let selectedPost = this.props.selectedPost.selected;   
        let date = this.parseDate(selectedPost.date);
        return(    
            <div className={style.postThreadContainer}>
                <div className={style.postThreadActionContainer}>
                    <button className={style.answerQuestionButton}
                            onClick={this.displayAnswerComponent.bind(this)}>Answer Question</button>
                </div>
                <div className={style.postDetailContainer}>
                    <div>
                        <div className={style.meta}>{selectedPost.author}</div>
                        <div className={style.meta}>{date}</div>
                    </div>
                    <div className={style.question}>{selectedPost.question}</div>
                    <div>{selectedPost.post}</div>
                    <div>{selectedPost.tags}</div>
                    <div className={style.postActionContainer}>
                        <ul>
                            <li onClick={this.onUpvoteClick}>Upvote</li>
                            <li onClick={this.onBookmarkClick}>Bookmark</li>
                        </ul>
                    </div>
                </div>
                <div className={style.answersContainer}>
                    {this.renderAnswers()}
                </div>
            </div>
            
        );
    }
}

/**
 * Take the application state and return is as the components this.props.
 * When state changes, the component will automatically re-render
 */
function mapStateToProps(state) {
    return {
        selectedPost: state.post,
        threadState: state.thread
    };
}

/**
 * bind multiple action creators to this component and 
 * return it as props
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, threadActionCreators, modalActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostThread)
