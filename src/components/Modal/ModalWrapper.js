import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import * as actions from '../../actions/modal';

import style from '../../../style/components/modal/ModalWrapper.css';

// const modalRoot = document.getElementById('modal-root');

class ModalWrapper extends Component {
    constructor(props){
        super(props);
    }

    /**
     * handle the background click to close the modal
     */
    handleBackgroundClick(e) {
        if(e.target == e.currentTarget) {
            this.props.hideModal();
        }
    }
 
    render() {
        return (
            <div className={style.modalwrapper} onClick={this.handleBackgroundClick.bind(this)} id="modal_wrapper">
                <div>
                
                </div>
                <div className={style.modalContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// ModalWrapper.PropTypes = {
//     width: PropTypes.number,
//     length: PropTypes.number
// }

export default connect(null, actions)(ModalWrapper)