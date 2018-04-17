import {
    FETCHING_SETTING,
    FETCHED_SETTING
} from '../actions/types.js';

let initialState = {
    isFetchingSetting: true
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCHING_SETTING:
            return {...state, isFetchingSetting: true };
        
        case FETCHED_SETTING:
            return {...state, isFetchingSetting: false, userSetting: action.payload.data}

        default: 
            return state
    }
}