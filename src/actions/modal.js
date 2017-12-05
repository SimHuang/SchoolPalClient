import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (types, props) => ({
    type:SHOW_MODAL,
    payload: {
        type,
        props
    }
});

export const hideModal = () => ({
    type: HIDE_MODAL
})