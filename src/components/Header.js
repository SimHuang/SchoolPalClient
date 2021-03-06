import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import NavBar from './NavBar';

import style from '../../style/components/Header.css';
import { Icon } from 'semantic-ui-react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.headerContainer}>
                <div className={style.linkContainer}>
                    <div className={style.links}>
                        <Link to="/feed"><Icon name='home' size='large' className={style.icon}/>Home</Link>
                        {/* <Link to="/feed"><Icon name='feed' size='large' className={style.icon}/>Feed</Link> */}
                        {/*<Link to="/">News</Link>*/}
                        {/* <Link to="/">Jobs</Link> */}
                        {/*<Link to="/">Resource</Link>*/}
                        {/* <Link to="/">Ranking</Link> */}
                    </div>
                    <NavBar {...this.props}/>
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