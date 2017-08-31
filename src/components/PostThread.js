import React, { Component } from 'react';

/**
 * This is the post thread container which holds a specific post along with all comments
 */
class PostThread extends Component {

    render() {
        return(
            
                
            <div>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.match.params.id}</div>
                <div>{this.props.match.params.id}</div>
                
            </div>
            
           
        );
        //POST

        //COMMENT CONTAINER
            //hold comments
    }
}

export default PostThread