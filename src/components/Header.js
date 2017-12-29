import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

import style from '../../style/components/Header.css';
import { Icon } from 'semantic-ui-react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        this.props.signOutUser();
    }

    render() {
        let askQuestionLink = this.props.auth.authenticated 
                        ? <div className={style.newPost}>
                            <Link to="/newPost">Ask Question</Link>
                         </div>
                        : undefined; 
        
        let signInLink = this.props.auth.authenticated 
                    ? <div onClick={this.handleSignOut} className={style.signin}>
                            <Link to="/" >Sign Out</Link>
                        </div>
                    : <div className={style.signin}>
                            <Link to="/signin">Sign In</Link>
                     </div>;

        let signUpLink = !this.props.auth.authenticated
                    ? <div className={style.signup}>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    : undefined;

        return (
            <div className={style.headerContainer}>
                <div className={style.linkContainer}>
                    <div className={style.links}>
                        <div>
                            <Link to="/"><Icon name='home' size='large' className={style.icon}/>Home</Link>
                            <Link to="/feed"><Icon name='feed' size='large' className={style.icon}/>Feed</Link>
                            {/*<Link to="/">News</Link>*/}
                            {/* <Link to="/">Jobs</Link> */}
                            {/*<Link to="/">Resource</Link>*/}
                            {/* <Link to="/">Ranking</Link> */}
                        </div>
                    </div>
                    <div className={style.access}>
                        {askQuestionLink}
                        {signInLink}
                        {signUpLink}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(Header);