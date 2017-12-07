import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (types, props) => ({
    type:SHOW_MODAL,
    payload: {
        type,
        props
    }
});

//action to  unmount modal
export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}