import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../../style/components/Post.css';

class Post extends Component {

    parseDate(){
        let postDate = new Date(this.props.date);
        // return `${postDate.getMonth()}-${postDate.getDay()}-${postDate.getFullYear()}`
        return postDate.toDateString();
    }

    render() {
        let parsedDate = this.parseDate();

        return (
            <div className={style.postsContainer}>
                <Link to={`/post/${this.props.id}`}>
                    <div className={style.metaContainer}>
                        <div>
                            <span className={style.username}>{this.props.username}</span>
                            <span className={style.topRightCorner}>
                                {/* <span>{this.props.username}</span> */}
                                <span>{parsedDate}</span>
                            </span>
                        </div>    
                    </div>
                    <div className={style.postContainer}>
                        <p>{this.props.question}</p>
                    </div>
                    <div className={style.upvoteContainer}>
                        <span>votes {this.props.upvote}</span>
                        <span>views {this.props.views}</span>
                        <span>answers {this.props.answers}</span>
                    </div>
                </Link>
            </div>
        )
    }
}

Post.prototypes = {
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, //passed in as ISO format
    post: PropTypes.string.isRequired,
    school: PropTypes.string,
    upvote: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    key: PropTypes.string
}

export default Post