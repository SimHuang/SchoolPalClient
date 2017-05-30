import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../../style/components/Header.css';

class Header extends Component {

    render() {
        return (
            <div className={style.headerContainer}>
                <ul className={style.listContainer}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header