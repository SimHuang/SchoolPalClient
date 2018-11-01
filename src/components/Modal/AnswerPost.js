import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/modal';
import { Field, reduxForm } from 'redux-form';

import ModalWrapper from './ModalWrapper';

import classNames from 'classnames';
import style from '../../../style/components/modal/AnswerPost.css';
import { Button, Form, TextArea } from 'semantic-ui-react';

/**
 * custom components using semantic ui and redux form 
 */
const semanticReduxFormTextArea = field => (
    <TextArea 
        placeholder="What do you have in mind?"
        style={{ minHeight: 310, marginBottom: '10px', resize: 'none' }}
        value={field.input.value}
        onChange={(param,data) => field.input.onChange(data.value)}
    />
)

/**
 * This is the component where the user can answer a post question
 */
class AnswerPost extends Component {

    constructor(props) {
        super(props);       
        this.answerPost = this.answerPost.bind(this);
    }

    /**
     * Calls action creator to post a new answer for a question
     */
    answerPost(values) {
        console.log(this.props);
        let postId = window.location.pathname.split('/')[2];
        let answer = values.answerTextArea;
        this.props.postAnswerForThread({
            response: answer,
            post: postId
        }, () => {
            //after sucessful answer rerender the thread component and close the modal
            this.props.fetchSpecificPost(postId);
            this.props.hideModal();
        });
    }

    render() {
        const { handleSubmit } = this.props;

        var answerPostClass = classNames(
            'ui',
            'primary',
            'button',
            style.custom,
        );

        //determine the submit button
        let submitButton = this.props.thread.isAnswering ? 
            <Button primary loading disabled className={answerPostClass} role="button" content='Submit Answer' type='submit'/> :
            <Button className={answerPostClass} role="button" content='Submit Answer' type='submit'/>

        return (
            <ModalWrapper {...this.props.modal} canHide={true}>
                <Form onSubmit={handleSubmit(this.answerPost)}>  
                    {/* <TextArea placeholder="What do you have in mind?" style={{ minHeight: 310, marginBottom: '10px', resize: 'none' }}/> */}
                    <Field name="answerTextArea" component={semanticReduxFormTextArea} />
                    {/* <Button className={answerPostClass} role="button" content='Submit Answer' type='submit'/> */}
                    {submitButton}
                </Form>
            </ModalWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        thread: state.thread,
        modal: state.modal
    }
}

let form = reduxForm({
    form: 'answerpost'
})(AnswerPost)

export default connect(mapStateToProps, action)(form) 