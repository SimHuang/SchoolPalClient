import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import navbarStyle from '../../style/components/navbar.css';
import { Icon } from 'semantic-ui-react';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.setDropDownstate = this.setDropDownstate.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);

        //user react state to manage dropdown display
        this.state = {
            displayUserSettingDropdown: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    /**
     * signout
     */
    handleSignOut() {
        this.props.signOutUser();
    }

    /**
     * close the dropdown if user clicks elsewhere
     */
    handleOutsideClick(e) {
        if(this.props.auth.authenticated) {
            var icon = document.getElementById('userSetting');
            if(e.target !== icon && this.state.displayUserSettingDropdown) {
                this.setState({displayUserSettingDropdown: false});
            }
        }   
    }

    /**
     * determine if drop should be shown
     */
    setDropDownstate() {
        if(this.state.displayUserSettingDropdown) {
            this.setState({displayUserSettingDropdown: false});
        }else {
            this.setState({displayUserSettingDropdown: true});
        }
    }

    /**
     * determine if the user setting dropdown should be displayed
     */
    shouldRenderUserSettingDropdown() {
        
        let dropdownClass = classNames({
            [navbarStyle.userSettingDropdownList] : true,
            [navbarStyle.userSettingDropdownListShow]: this.state.displayUserSettingDropdown,
            [navbarStyle.userSettingDropdownListHide]: !this.state.displayUserSettingDropdown  
        });

        if(this.props.auth.authenticated) {
            return ( 
                <li className={navbarStyle.userSettingIcon}>
                    <Icon id="userSetting" name="user" size="large" onClick={this.setDropDownstate}/>
                    <div className={dropdownClass}>
                        <Link to="/"><Icon name="setting" size="large" /> Setting</Link>
                        <Link to="/" onClick={this.handleSignOut}><Icon name="sign out" size="large"/> Sign Out</Link>
                    </div>
                </li>
            )

        }else {
            return undefined;
        }
    }

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

        return (
            <div className={navbarStyle.navbarContainer}>
                <ul className={navbarStyle.navbar}>
                    {signInLink}
                    {signUpLink}
                    {answerQuestionLink}
                    {this.shouldRenderUserSettingDropdown()}
                </ul>
            </div>
        )
    }
}

export default NavBar