import React, { Component } from 'react';
import style from '../../style/components/CreatePost.css';
import { connect } from 'react-redux';
import * as actions from '../actions/post';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends Component {

    cancelPost() {
        this.props.history.push('/');
    }

    submitPost(values) {
        console.log(values);
        this.props.createPost(
            {
                username: 'simon', //how do i retrieve the current user
                school: values.school,
                question: values.question,
                post:values.detail, 
                date: '07/15/2017', 
                tags: values.tags,
                upvotes:0, 
                views:0, 
                answers:0
            }, () => {
                //redirect to main page after post has been created successfully
                this.props.history.push('/');
            });
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
                        <Field className={style.field} name="question" component="input" type="text" placeholder="Ask Question"/>
                        <br />
                        <br />
                        <Field className={style.field} name="school" component="input" type="text" placeholder="Select a school"/>
                        <br />
                        <br />
                        <Field className={style.textArea} name="detail" component="textarea" type="textarea" placeholder="Add additional information..."/>
                        <br />
                        <br />
                        <Field className={style.field} name="tags" component="input" type="text" placeholder="tags"/>
                        <br />
                        <br />
                        <button type="submit" className={style.submitBtn}>Submit</button>
                        <a className={style.cancelBtn} onClick={this.cancelPost.bind(this)} >Cancel</a>
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