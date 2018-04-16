import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/user';

import styles from '../../style/components/userSetting.css';

class UserSetting extends Component {

    componentWillMount() {
        this.props.retrieveUserSetting();
    }

    render() {
        return (
            <div className={styles.userSettingContainer}>
                hello world
                {this.props.setting}
            </div>
        )
    }
}

/**
 * Take the redux state and return it to the component 
 * as props
 */
const mapStateToProps = (state) => {
    console.log(state.user);
    return {
        setting: state.user.UserSetting,
    }
}

export default connect(mapStateToProps, actions)(UserSetting);