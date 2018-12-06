import { FETCH_POST, NEW_POST, FETCH_POSTS } from '../actions/types';
// const objectToArray =require('object-to-array');
const initialState = {
    items: [],
    item: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_POST:
            return {
                ...state,
                items: action.payload
            }
        
        default:
            return state;
    }
}