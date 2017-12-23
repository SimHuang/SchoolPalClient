import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/thread.js';

import AnswerPost from './Answerpost';

const ModalConductor = props => {    
    switch(props.currentModal.payload) {
        case 'answer_post_modal':
            return <AnswerPost {...props}/>
        
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
