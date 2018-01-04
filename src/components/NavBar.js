import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import navbarStyle from '../../style/components/navbar.css';
import { Icon } from 'semantic-ui-react';
class NavBar extends Component {

    render() {
        let signInLink = !this.props.auth.authenticated ? 
                        <li>
                            <Link to="/signin">Sign In</Link>
                        </li> : 
                        undefined;

        let signUpLink = !this.props.auth.authenticated ? 
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li> :
                        undefined;

        let answerQuestionLink = this.props.auth.authenticated ? 
                        <li>
                            <Link to="/newPost">Ask Question</Link>
                        </li> :
                        undefined;
        
        let userSettingIcon = this.props.auth.authenticated 
                        ? <li className={navbarStyle.userSettingIcon}>
                            <Icon name="user" size="large"/>
                            <div className={navbarStyle.userSettingDropdownList}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                         </li>
                        : undefined;
        
        let signOutLink = this.props.auth.authenticated ? 
                        <li>
                            <Link to="/">Sign Out</Link>
                        </li> :
                        undefined;

        return (
            <div className={navbarStyle.navbarContainer}>
                <ul className={navbarStyle.navbar}>
                    {signInLink}
                    {signUpLink}
                    {answerQuestionLink}
                    {signOutLink}
                    {userSettingIcon}
                </ul>
            </div>
        )
    }
}

export default NavBar