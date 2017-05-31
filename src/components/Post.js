import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../../style/components/Post.css';

class Post extends Component {

    render() {
        return (
            <div className={style.postsContainer}>
                <div className={style.metaContainer}>
                    <div>
                        <div>{this.props.username}</div>
                        <div>{this.props.date}</div>
                        <div>{this.props.school}</div>
                    </div>
                    <div className={style.postContainer}>
                        <p>{this.props.post}</p>
                    </div>
                    <div className={style.upvoteContainer}>
                        <span>upvote {this.props.upvote}</span>
                    </div>
                </div>
            </div>
        )
    }
}

Post.prototypes = {
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    school: PropTypes.string,
    upvote: PropTypes.string.isRequired
}

export default Post