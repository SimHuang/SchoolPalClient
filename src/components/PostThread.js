import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as threadActionCreators from '../actions/thread';
import * as modalActionCreators from '../actions/modal';
import { ANSWER_POST_MODAL } from '../actions/types';

import style from '../../style/components/postThread.css';

/**
 * This is the post thread container which holds a specific post along with all comments
 */
class PostThread extends Component {

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
    }

    /**
     * Display the answer component on the same page to allow user
     * to answer question
     */
    displayAnswerComponent() {
        this.props.showModal(ANSWER_POST_MODAL);
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
                <div className={style.answerContainer} key={index}>
                    <div className={style.meta}>{value.user}</div>
                    <div className={style.meta}>{this.parseDate(value.date)}</div>
                    <div className={style.answer}>{value.answer}</div>
                </div>
            )
        })
    }

    render() {
        //return loading if data is not returned
        if(!this.props.selectedPost.selected) {
            return (
                <div className={style.postThreadContainer}>
                    <div>loading...</div>
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
 * @param {*} state The current application state
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
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, threadActionCreators, modalActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostThread)
