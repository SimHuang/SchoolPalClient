import React, { Component } from 'react';
import style from '../../../style/components/SignIn.css'
import { Field, reduxForm } from 'redux-form';

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
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

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

}

const signInForm = reduxForm({
    form: 'signIn',
    validate
})(SignIn)

export default signInForm