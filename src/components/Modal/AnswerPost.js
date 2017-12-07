import React, { Component } from 'react';
// import style from '../../style/components/AnswerPost.css';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ModalWrapper from './ModalWrapper';

/**
 * This is the component where the user can answer a post question
 */
class AnswerPost extends Component {

    render() {
        return (
            <ModalWrapper {...this.props}>
                <div>
                    <div>
                        This is the answer post
                    </div>
                </div>
            </ModalWrapper>
        )
        
    }
}

export default AnswerPost 