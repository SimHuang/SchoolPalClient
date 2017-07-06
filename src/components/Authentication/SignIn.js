import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';
import style from '../../../style/components/SignIn.css'


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    /**
     * This is called when user submits form. Values parameter contains the value 
     * user passed in to the submit.
     */ 
    handleSignIn(values) {
        this.props.signInUser(values, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const { handleSubmit } = this.props;
        let loginError = '';
        if(!this.props.auth.authenticated && this.props.auth.error) {
            loginError = <div className={style.error}>Unauthorized. Try again!</div>
        }

        return( 
            <div className={style.mainContainer}>
                <div>
                    <h3>Sign In</h3>
                    <form onSubmit={handleSubmit(this.handleSignIn)}>
                        <Field name="username" component={renderFields} type="username" placeholder="Username"/>
                        <br/>
                        <Field name="password" component={renderFields} type="password" placeholder="Password" />
                        <br/>
                        <button className={style.submitBtn} type="submit">Log In</button>
                        <button className={style.cancelBtn} type="submit">Cancel</button>
                    </form>
                </div>
                {loginError}
            </div>
        );
    }
}

const renderFields = ({
    input,
    type,
    label,
    meta: {touched, error, warning}
}) => (
    <div>
      <input {...input} className={style.field} placeholder={label} type={type} />
      {touched &&
        ((error && <div className={style.error}>{error}</div>) ||
          (warning && <div className={style.error}>{warning}</div>))}
    </div> 
)

const validate = values => {
    const errors = {};
    if(!values.username) {
        errors.username = "Username Required!";
    }

    if(!values.password) {
        errors.password = "Password Required!"
    }

    return errors;
}

//This function is called whenever their is an update to the redux store
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const signInForm = reduxForm({
    form: 'signIn',
    validate
})(SignIn)

export default connect(mapStateToProps, actions)(signInForm);