import React, { Component } from 'react';

class SignIn extends Component {

    render() {
        return( 
            <div>
                <div>Sign in</div>
                <div>
                    <h3>Sign In</h3>
                    <form>
                        <input name="Username" type="text" placeholder="Username"/>
                        <br/>
                        <input name="Password" type="password" placeholder="Password" />
                        <br/>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn