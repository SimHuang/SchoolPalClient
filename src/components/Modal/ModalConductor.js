import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/thread.js';

import AnswerPost from './Answerpost';
// import ModalWrapper from './ModalWrapper';

// const ModalConductor = (props) => {
    
//     // switch(props.currentModal) {
//     //     case 'SHOW_MODAL':
//     //         console.log(this.props.currentModal + 'answering question');
//     //         return <AnswerPost />
        
//     //     default:
//     //         return null;
//     // }
//     // console.log('this is the current modal ' + props.modal.money);

//     if(props.currentModal === 'SHOW_MODAL') {
//         return <AnswerPost />
//     }

//     return null;
// }

class ModalConductor extends React.Component { 
    render() {
        console.log('this is in the answer post '  + this.props.currentModal);
        if(this.props.currentModal === 'SHOW_MODAL') {
            return <AnswerPost />
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    console.log(state.modal);
    return {
        currentModal: state.modal
    }
}
    

export default connect(mapStateToProps,actions)(ModalConductor)
// export default ModalConductor