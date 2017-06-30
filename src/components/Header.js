import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../../style/components/Header.css';

class Header extends Component {

    render() {
        return (
            <div className={style.headerContainer}>
                <div className={style.linkContainer}>
                    <div className={style.links}>
                        <div>
                            <Link to="/">Posts</Link>
                            <Link to="/">Schools</Link>
                            {/*<Link to="/">News</Link>*/}
                            <Link to="/">Jobs</Link>
                            {/*<Link to="/">Resource</Link>*/}
                            <Link to="/">Ranking</Link>
                        </div>
                    </div>
                    <div className={style.access}>
                        <div className={style.newPost}>
                            <Link to="/newPost">Ask Question</Link>
                        </div>
                        <div className={style.signin}>
                            <Link to="/signin">Sign In</Link>
                        </div>
                        <div className={style.signup}>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header