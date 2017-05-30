import React, { Component, PropTypes } from 'react';

class Post extends Component {

    render() {
        return (
            <div>
                <div>
                    <div>Username</div>
                    <div>date</div>
                    <div>school</div>
                </div>
                <div>
                    <p>post</p>
                </div>
                <div>upvote</div>
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

export default React