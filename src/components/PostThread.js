import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post';

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
        console.log('I am writing an ansdwer');
    }
 
    /**
     * Create elements to contain all answers
     */
    renderAnswers() {

    }

    render() {
        //return loading if data is not returned
        if(!this.props.selectedPost.selected) {
            return (
                <div className={style.postThreadContainer}>
                    <div>loading selected post...</div>
                </div>
            )
        }

        let selectedPost = this.props.selectedPost.selected;   
        let date = this.parseDate(selectedPost.date);
        console.log(selectedPost);  
        return(    
            <div className={style.postThreadContainer}>
                <div className={style.postThreadActionContainer}>
                    <button className={style.answerQuestionButton}
                            onClick={this.displayAnswerComponent.bind(this)}>Answer Question</button>
                </div>
                <div className={style.postDetailContainer}>
                    <div>
                        <span>{selectedPost.author}</span>
                        <span>{date}</span>
                    </div>
                    <div className={style.question}>{selectedPost.question}</div>
                    <div>{selectedPost.post}</div>
                    <div>{selectedPost.tags}</div>
                </div>
                <div className={style.answersContainer}>
                    {/*TODO: RENDER ANSWER METHOD TO RENDER ALL ANSWERS  */}
                    <div className={style.answer}>
                        This is very difficult
                    </div>
                    <div className={style.answer}>
                        Try applying to stony brook
                    </div>
                    <div className={style.answer}>
                        It is very hard for you to get into school
                    </div>
                    <div className={style.answer}>
                        This is very difficult
                    </div>
                </div>
            </div>
        );
        //POST

        //COMMENT CONTAINER
            //hold comments
    }
}

function mapStateToProps(state) {
    return {
        selectedPost: state.post
    };
}

export default connect(mapStateToProps, actions)(PostThread)
// export default PostThread