import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';
import SignIn from '../Authentication/Signin';

import style from '../../../style/components/modal/loginModal.css';


class LogInModal extends Component {

    render() {
        return (
            <ModalWrapper canHide={false}>
                <SignIn className={style.signInContainer} {...this.props}/>
                {/* <div>log in first</div> */}
            </ModalWrapper>
        )
    }
}

export default LogInModal