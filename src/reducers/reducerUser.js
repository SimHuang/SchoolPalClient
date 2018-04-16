import {
    FETCHING_SETTING,
    FETCHED_SETTING
} from '../actions/types.js';

export default function(state={}, action) {
    switch(action.type) {
        case FETCHING_SETTING:
            return {...state, isFetchingSetting: true };
        
        case FETCHED_SETTING:
            return {...state, isFetchingSetting: false, userSetting: action.payload.data}

        default: 
            return state
    }
}