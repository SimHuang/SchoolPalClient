import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

import * as actions from '../../actions/auth';
import * as modalActionCreators from '../../actions/modal';
import style from '../../../style/components/SignIn.css'
import { Checkbox } from 'semantic-ui-react';


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
            this.props.hideModal(); //hide props if any exist
            let url = window.location.pathname;
            
            //standard login
            if(url === '/signin') {
                this.props.history.push('/');
            
            //if user is signing in from a specific post
            }else {
                let postId = window.location.pathname.split('/')[2];
                this.props.fetchSpecificPost(postId);
                return (
                    <Redirect to={window.location.pathname}/>
                )
            }
        })
    }

    render() {
        const { handleSubmit } = this.props;
        let loginError = '';
        if(!this.props.auth.authenticated && this.props.auth.error) {
            loginError = <div className={style.error}>Either the username or password is incorrect. Try again!</div>
        }

        return( 
            <div className={style.mainContainer}>
                <div>
                    <h3>Sign In</h3>
                    <form onSubmit={handleSubmit(this.handleSignIn)}>
                        <Field name="username" component={renderFields} type="username" label="Email"/>
                        <br/>
                        <Field name="password" component={renderFields} type="password" label="Password" />
                        <br/>
                        <button className={style.submitBtn} type="submit">Log In</button>
                        <br/>
                        {loginError}
                        {/* <Link to="/">Cancel</Link> */}
                    </form>
                </div>
                
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
        errors.username = "Email Required!";
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Object.assign({}, actions, modalActionCreators), dispatch);
}
const signInForm = reduxForm({
    form: 'signIn',
    validate
})(SignIn)

export default connect(mapStateToProps, mapDispatchToProps)(signInForm);