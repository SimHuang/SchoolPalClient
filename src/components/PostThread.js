import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post';

import style from '../../style/components/postThread.css';

/**
 * This is the post thread container which holds a specific post along with all comments
 */
class PostThread extends Component {

    /**
     * Fetch post details and comments pertaining to a selected post
     */
    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.fetchSpecificPost(id);
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
        console.log(selectedPost);  
        return(    
            <div className={style.postThreadContainer}>
                <div>{selectedPost.author}</div>
                <div>{selectedPost.date}</div>
                <div>{selectedPost.question}</div>
                <div>{selectedPost.post}</div>
                <div>{selectedPost.tags}</div>
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