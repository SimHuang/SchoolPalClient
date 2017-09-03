import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/post';
import Post from './Post';
import style from '../../style/components/main.css';

class Main extends Component {

    //retrieve all post before component is rendered
    componentWillMount() {
        this.props.fetchPost();
    }

    renderPosts() {
        return this.props.posts.map((post,index)=> {
            return (
                <Link
                    to={`/post/${post._id}`}
                    key={post._id}
                >
                    <Post 
                        key={post._id}
                        username={post.author} 
                        date={post.date} 
                        school={post.school} 
                        post={post.post} 
                        upvote={post.upvotes}
                        question={post.question}/>
                </Link>
            );
        })   
    }

    render() {
        if(!this.props.posts) {
            return (
                <div className={style.mainContainer}>
                    <div>loading...</div>
                </div> 
            )
                
        }

        return (
            <div className={style.mainContainer}>
                {this.renderPosts()}
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, actions)(Main)