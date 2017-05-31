import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../../style/components/Header.css';

class Header extends Component {

    render() {
        return (
            <div className={style.headerContainer}>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/signin">Sign In</Link>
                </div>
                <div>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        );
    }
}

export default Header