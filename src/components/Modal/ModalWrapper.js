import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../../../style/components/modal/ModalWrapper.css';

const ModalWrapper = props => {
    const handleBackgroundClick = e => {
        if(e.target === e.currentTarget) {
            console.log('going to hide modal');
        }
    }

    return (
        <div className={style.modalwrapper} onClick={handleBackgroundClick}>
            <div className={style.modalContent}>
                {props.children}
            </div>
        </div>
    )
}

ModalWrapper.PropTypes = {
    width: PropTypes.number,
    length: PropTypes.number
}

export default ModalWrapper