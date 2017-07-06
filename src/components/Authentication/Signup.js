import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/auth';
import style from '../../../style/components/SignUp.css';


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

    //the object containing the form data is passed through by redux form
    handleSignUp(formProps) {
        this.props.signUpUser(formProps, ()=> {
            this.props.history.push('/');
        });
    }

    render() {
        // {console.log(this.props.auth)}
        let errorMessage = null;
        const { handleSubmit } = this.props; 

        if(!this.props.auth.authenticated && this.props.auth.error) {
            errorMessage = <div className={style.error}>{this.props.auth.error.data.error}</div>
        }

        return (
            <div className={style.mainContainer}>
                <h3>Create Account</h3>
                <form onSubmit={handleSubmit(this.handleSignUp)}>
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
                    <Link to="/"><button className={style.cancelBtn} >Cancel</button></Link>
                </form>
                {errorMessage}
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

//returns a piece of state to component as props
function mapStateToProps(state) {
    // return { errorMessage: state.auth.error};
    return { 
        auth: state.auth
     }
}

const signupForm =  reduxForm({
    form:'signupAccount',
    validate
})(Signup)

export default connect(mapStateToProps, actions)(signupForm);