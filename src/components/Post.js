import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from '../../style/components/Post.css';
import { Label, Icon } from 'semantic-ui-react';

class Post extends Component {

    parseDate(){
        let postDate = new Date(this.props.date);
        let today = new Date();
        let timeDifference = today.getTime() - postDate.getTime();

        //within 1 min
        if(timeDifference <= 60000) {
            return `${new Date(timeDifference).getSeconds()} seconds ago`;
        
        //within 1 hour
        }else if(timeDifference <= 3600000) {
            return `${new Date(timeDifference).getMinutes()} minutes ago`;
        
        //withing 24 hours
        }else if(timeDifference <= 86400000) {
            return `${new Date(timeDifference).getHours()} hours ago`;
        
        }else {
            let month = postDate.getMonth() + 1;
            return month + '/' + postDate.getDate() + '/' + postDate.getFullYear();
        }
    }

    //decrease the numnber of votes on user click
    onDownvoteClick() {

    }

    render() {
        let parsedDate = this.parseDate();

        return (
            <div className={style.postsContainer}>
                <div className={style.metaContainer}>
                    <div>
                        <span className={style.username}><Icon size={'large'} name='user outline'/>{this.props.username}</span>
                        <span className={style.topRightCorner}>
                            {/* <span>{this.props.username}</span> */}
                            <span>{parsedDate}</span>
                        </span>
                    </div>    
                </div>
                <Link to={`/post/${this.props.id}`}>
                    <div className={style.postContainer}>
                        <p>{this.props.question}</p>
                    </div>
                </Link>
                <div className={style.upvoteContainer}>
                    <span className={style.meta}>Votes {this.props.upvote}</span>
                    <span className={style.meta}>Views {this.props.views}</span>
                    <span className={style.meta}>Answers {this.props.answers}</span>
                    <span className={style.metaAction}>Follow</span>
                    <span className={style.metaAction} onClick={this.onDownvoteClick.bind(this)}>Downvote</span>
                </div>
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