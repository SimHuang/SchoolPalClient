import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from './Post';
import style from '../../style/components/main.css';

class Main extends Component {

    //retrieve all post before component is rendered
    componentWillMount() {
        this.props.fetchPost();
        
    }

    renderPosts() {
        console.log(this.props.posts);
        return this.props.posts.map((post,index)=> {
            return (
                <Post 
                    key={index}
                    username={post.username} 
                    date={post.date} 
                    school={post.school} 
                    post={post.post} 
                    upvote={post.upvotes}/>
            );
        })
            
    }

    render() {
        return (
            <div className={style.mainContainer}>
                {this.renderPosts()}
            </div>
            
        );
    }
}

Main.prototypes = {

}

function mapStateToProps(state) {
    return {posts: state.post}
}

export default connect(mapStateToProps, actions)(Main)