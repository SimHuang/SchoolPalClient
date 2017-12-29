import React, { Component } from 'react';

import style from '../../style/components/answer.css';

class Answer extends Component {
    render() {
        return (
            <div className={style.answerContainer}>
                <div className={style.meta}>{this.props.user}</div>
                <div className={style.meta}>{this.props.date}</div>
                <div className={style.answer}>{this.props.answer}</div>
            </div>
        )
    }
}

export default Answer