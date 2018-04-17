import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/user';
import { Field, reduxForm } from 'redux-form';

import styles from '../../style/components/userSetting.css';

class UserSetting extends Component {
    constructor(props) {
        super(props);

        
    }

    componentWillMount() {
        this.props.retrieveUserSetting();
    }

    onUpdateProfileHandler(e){
        e.preventDefault();
        console.log('you just submitted a new profile');
    }

    render() {
        const {handleSubmit, pristine, submitting } = this.props;
        if(this.props.setting.isFetchingSetting) {
            return <div className={styles.userSettingContainer}>Please login to view setting.</div>
        }

        //return this only if loading setting is false
        return (
            <div className={styles.userSettingContainer}>
                <div>
                    <div>
                        <h2>Profile Information</h2>
                    </div>
                    <form onSubmit={()=>{this.onUpdateProfileHandler}}>
                        <div>
                            <dl>
                                <dt><label className={styles.profileLabel} htmlFor="profile_name">Name</label></dt>
                                <dt><Field name="profile_name" 
                                            id="profilename" 
                                            component="input" 
                                            type="text" 
                                            className={styles.profileInput}/>
                                </dt>
                            </dl>
                            <dl>
                                <dt><label className={styles.profileLabel} htmlFor="profile_username">UserName</label></dt>
                                <dt><Field name="profile_username"
                                            id="profile_username"
                                            component="input" 
                                            type="text" 
                                            className={styles.profileInput}/>
                                </dt>
                            </dl>
                            <dl>
                                <dt><label className={styles.profileLabel} htmlFor="profile_email">Email</label></dt>
                                <dt><Field name="profile_email" 
                                            id="profile_email" 
                                            component="input" 
                                            type="text" 
                                            className={styles.profileInput}/>
                                </dt>
                            </dl>
                            <dl>
                                <dt><label className={styles.profileLabel} htmlFor="profile_bio">Bio</label></dt>
                                <dt><Field name="profile_bio" 
                                            id="profile_bio" 
                                            component="textarea" 
                                            className={styles.profileTextArea}/>
                                </dt>
                            </dl>
                            <button className={styles.settingButton} type="submit">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

/**
 * Take the redux state and return it to the component 
 * as props
 */
const mapStateToProps = (state) => {
    return {
        setting: state.user,
        initialValues: {
            profile_name: state.user.userSetting === undefined ? ' ' : state.user.userSetting.name,
            // profile_username: state.user.userSetting === undefined ? ' ' : state.user.userSetting.userName,
            profile_email: state.user.userSetting ===undefined ? ' ' : state.user.userSetting.email
        }
    }
}

var form = reduxForm({
    form: 'userSettingForm',
    enableReinitialize: true
})(UserSetting)

export default connect(mapStateToProps, actions)(form);