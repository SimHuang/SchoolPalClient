import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/thread.js';

import AnswerPost from './Answerpost';
import LogInModal from './LogInModal';

import { ANSWER_POST_MODAL, SIGN_IN_MODAL } from '../../actions/types';

const ModalConductor = props => {    
    switch(props.currentModal.payload) {
        case ANSWER_POST_MODAL:
            return <AnswerPost {...props}/>
        
        case SIGN_IN_MODAL:
            return <LogInModal {...props}/>
        
        default:
            return null;
    }
}

const mapStateToProps = (state) => {
    return {
        currentModal: state.modal
    }
}
    
export default connect(mapStateToProps, actions)(ModalConductor)
