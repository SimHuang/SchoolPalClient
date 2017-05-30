import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <h3>Create Account</h3>
                <form>
                    <input name="Email" type="text" placeholder="Email"/>
                    <br/>
                    <input name="Firstname" type="text" placeholder="Firstname"/>
                    <br/>
                    <input name="Lastname" type="text" placeholder="Lastname"/>
                    <br/>
                    <input name="Username" type="text" placeholder="Username"/>
                    <br/>
                    <input name="Password" type="password" placeholder="Password" />
                    <br/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default Signup