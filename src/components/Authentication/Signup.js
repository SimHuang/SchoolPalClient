import React, { Component } from 'react';
import style from '../../../style/components/SignUp.css';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

//component to render in the component props
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
    return (
        <div>
            <div>
                <input className={style.field} {...input} placeholder={label} type={type} />
                {touched &&
                ((error && <div className={style.error}>{error}</div>) || (warning && <div>{warning}</div>))}
            </div>
        </div>
    );
}

class Signup extends Component {
    constructor(props) {
        super(props);

        //bind function to this
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(event) {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <div className={style.mainContainer}>
                <h3>Create Account</h3>
                <form onSubmit={this.handleSignUp}>
                    <Field 
                        className={style.field} 
                        name="email" 
                        component={renderField} 
                        type="text" 
                        label=" Email"
                    />
                    <br/>
                    <Field 
                        className={style.field} 
                        name="name" 
                        component={renderField}
                        type="text" 
                        label=" Full Name"
                    />
                    <br/>
                    <Field 
                        className={style.field} 
                        name="username" 
                        component={renderField} 
                        type="text" 
                        label=" Username"
                    />
                    <br/>
                    <Field 
                        className={style.field} 
                        name="password" 
                        component={renderField} 
                        type="password"
                        label=" Password" 
                    />
                    <br/>
                    <Field 
                        className={style.field} 
                        name="passwordagain" 
                        component={renderField} 
                        type="password" 
                        label=" Enter Password Again" 
                    />
                    <br/>
                    <button className={style.submitBtn} type="submit">Create Account</button>
                    <button className={style.cancelBtn} >Cancel</button>
                </form>
            </div>
        )
    }
}

//function used to validate the redux form
const validate = values => {
    const error = {};
    if(!values.email) {
        error.email = 'Required';
    }else if(!values.email.includes('@')) {
        error.email = 'Please enter a proper email!';
    }

    if(!values.name) {
        error.name = 'Required';
    }

    if(!values.password) {
        error.password = 'Required';
    }

    if(!values.passwordagain) {
        error.passwordagain = 'Required';
    }else if(values.passwordagain !== values.password) {
        error.passwordagain = 'Passwords do not match!'
    }

    return error;
} 

export default reduxForm({
    form:'signupAccount',
    validate
})(Signup)