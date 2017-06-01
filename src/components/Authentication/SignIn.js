import React, { Component } from 'react';
import style from '../../../style/components/SignIn.css'

class SignIn extends Component {

    render() {
        return( 
            <div className={style.mainContainer}>
                <div>
                    <h3>Sign In</h3>
                    <form>
                        <input className={style.field} name="Username" type="text" placeholder="Username"/>
                        <br/>
                        <br/>
                        <input className={style.field} name="Password" type="password" placeholder="Password" />
                        <br/>
                        <br />
                        <button className={style.submitBtn} type="submit">Log In</button>
                        <button className={style.cancelBtn} type="submit">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn