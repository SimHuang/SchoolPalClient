import React, { Component } from 'react';
import style from '../../../style/components/AnswerPost.css';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ModalWrapper from './ModalWrapper';

import { Button, Form, TextArea } from 'semantic-ui-react';

/**
 * This is the component where the user can answer a post question
 */
class AnswerPost extends Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        //make sure no data is left hanging
    }

    render() {
        var answerPostClass = classNames(
            'ui',
            'primary',
            'button',
            style.custom,
        );

        return (
            <ModalWrapper {...this.props}>
                <Form>  
                    <TextArea placeholder="What do you have in mind?" style={{ minHeight: 300, marginBottom: '10px' }}/>
                    <Button className={answerPostClass} role="button" content='Submit Answer'/>
                </Form>
            </ModalWrapper>
        )
    }
}

export default AnswerPost 