import React, { Component } from 'react';
import style from '../../../style/components/SignUp.css';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
                        component="input" 
                        type="text" 
                        placeholder=" Email"
                    />
                    <br/><br/>
                    <Field 
                        className={style.field} 
                        name="name" component="input" 
                        type="text" 
                        placeholder=" Full Name"
                    />
                    <br/><br/>
                    <Field 
                        className={style.field} 
                        name="username" 
                        component="input" 
                        type="text" 
                        placeholder=" Username"
                    />
                    <br/><br/>
                    <Field 
                        className={style.field} 
                        name="password" 
                        component="input" 
                        type="password"
                        placeholder=" Password" 
                    />
                    <br/><br/>
                    <Field 
                        className={style.field} 
                        name="passwordagain" 
                        component="input" 
                        type="password" 
                        placeholder=" Enter Password Again" 
                    />
                    <br/><br/>
                    <button className={style.submitBtn} type="submit">Create Account</button>
                    <button className={style.cancelBtn} >Cancel</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'signup'
})(Signup)