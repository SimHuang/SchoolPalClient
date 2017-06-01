import React, { Component } from 'react';
import style from '../../../style/components/SignUp.css';

class Signup extends Component {
    render() {
        return (
            <div className={style.mainContainer}>
                <h3>Create Account</h3>
                <form>
                    <input className={style.field} name="Email" type="text" placeholder="Email"/>
                    <br/>
                    <br/>
                    <input className={style.field} name="Firstname" type="text" placeholder="Firstname"/>
                    <br/>
                    <br/>
                    <input className={style.field} name="Lastname" type="text" placeholder="Lastname"/>
                    <br/>
                    <br/>
                    <input className={style.field} name="Username" type="text" placeholder="Username"/>
                    <br/>
                    <br/>
                    <input className={style.field} name="Password" type="password" placeholder="Password" />
                    <br/>
                    <br/>
                    <button className={style.submitBtn} type="submit">Create Account</button>
                    <button className={style.cancelBtn} >Cancel</button>
                </form>
            </div>
        )
    }
}

export default Signup