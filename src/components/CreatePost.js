import React, { Component } from 'react';
import style from '../../style/components/CreatePost.css';
import { connect } from 'react-redux';
import * as actions from '../actions/post';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends Component {

    cancelPost() {
        
    }

    submitPost(values) {
        console.log(values);
        this.props.createPost(
            {
                username: 'simon', //how do i retrieve the current user
                school: 'Syracuse University',
                question: values.question,
                post:values.detail, 
                date: '07/15/2017', 
                tags: values.tags,
                upvotes:0, 
                views:0, 
                answers:0
            });
        this.props.history.push('/');
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className={style.mainContainer}>
                <div className={style.header}>
                    <h3>Post A New Question</h3>
                </div>
                <div className={style.formContainer}>
                    <form onSubmit={handleSubmit(this.submitPost.bind(this))}>
                        <Field className={style.field} name="question" component="input" type="text" placeholder="Enter Question"/>
                        <br />
                        <br />
                        <Field className={style.field} name="tags" component="input" type="text" placeholder="tags"/>
                        <br />
                        <br />
                        <Field className={style.textArea} name="detail" component="textarea" type="textarea" placeholder="Enter Details"/>
                        <br />
                        <br />
                        <button type="submit" className={style.submitBtn}>Submit</button>
                        <button className={style.cancelBtn}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

let form =  reduxForm({
    form: 'newpost'
})(CreatePost)

export default connect(mapStateToProps, actions)(form);