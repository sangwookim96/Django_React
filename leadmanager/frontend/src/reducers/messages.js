// gives message (alert) when we done some action.

import { CREATE_MESSAGE } from '../actions/types';


const initialState = {
    // empty for default
}

export default function (state = initialState, action) {
    switch (action.type) {       // test action.type
        case CREATE_MESSAGE:
            return (state = action.payload)
        default:
            return state;
    }
}