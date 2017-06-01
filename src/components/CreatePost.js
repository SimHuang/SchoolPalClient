import React, { Component } from 'react';
import style from '../../style/components/CreatePost.css';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends Component {

    cancelPost() {
        
    }

    submitPost() {

    }

    render() {
        return (
            <div className={style.mainContainer}>
                <div className={style.header}>
                    <h3>Post A New Question</h3>
                </div>
                <div className={style.formContainer}>
                    <form>
                        <Field className={style.field} name="question" component="input" type="text" placeholder="Enter Question"/>
                        <br />
                        <br />
                        <Field className={style.field} name="tags" component="input" type="text" placeholder="tags"/>
                        <br />
                        <br />
                        <Field className={style.textArea} name="Details" component="textarea" type="textarea" placeholder="Enter Details"/>
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

export default reduxForm({
    form: 'newpost'
})(CreatePost)