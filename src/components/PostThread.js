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
        console.log(this.props.posts);        
        return(    
            <div className={style.postThreadContainer}>
                <div>{this.props.match.params.id}</div>
            </div>
        );
        //POST

        //COMMENT CONTAINER
            //hold comments
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post
    };
}

export default connect(mapStateToProps, actions)(PostThread)
// export default PostThread