import React, { Component } from 'react';
// import style from '../../style/components/AnswerPost.css';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { hideModal } from '../../actions/modal';

/**
 * This is the component where the user can answer a post question
 */
class AnswerPost extends Component {

    render() {
        console.log(this.props.display);
        // let divStyle = classNames({
        //     [style.answerPostDisplay]: this.props.display,
        //     [style.answerPostHidden]: !this.props.display
        // });
        let divStyle = null;
        return (
            <div className={divStyle}>
                <div>
                    This is the answer post
                </div>
            </div>
        )
        
    }
}

export default AnswerPost 