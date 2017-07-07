import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../../style/components/Post.css';

class Post extends Component {

    render() {
        return (
            <div className={style.postsContainer}>
                <div className={style.metaContainer}>
                    <div>
                        <span className={style.school}>{this.props.school}</span>
                        <span className={style.topRightCorner}>
                            <span>{this.props.username}</span>
                            <span>{this.props.date}</span>
                        </span>
                    </div>    
                </div>
                <div className={style.postContainer}>
                    <p>{this.props.post}</p>
                </div>
                <div className={style.upvoteContainer}>
                    <span>votes {this.props.upvote}</span>
                    <span>views {this.props.views}</span>
                    <span>answers {this.props.answers}</span>
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