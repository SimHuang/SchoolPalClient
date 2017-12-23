import { SHOW_MODAL, HIDE_MODAL } from './types';
import ReactDOM from 'react-dom';

/**
 * This action returns the component that should be rendered
 * @param {*} modalComponent 
 */
export const showModal = (modalComponent) => {
    return {
        type:SHOW_MODAL,
        payload: {
            modal: modalComponent
        }
    }
};

//amount the component that is passed in 
export const hideModal = (component) => {
    return {
        type: HIDE_MODAL,
        payload: {
            modal: null
        }
    }
}