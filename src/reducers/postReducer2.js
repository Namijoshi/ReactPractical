import { ALL_LIST, CHECKED_LIST, UNCHECKED_LIST } from '../actions/types';
import store from '../store';
// const objectToArray =require('object-to-array');
const initialState = {
    items: [],
    item: {}
}


export default function (state = initialState, action) {

    switch (action.type) {
       
        case ALL_LIST:
            return {
                ...state,
                items: action.items
            }

        case CHECKED_LIST:
            return {
                ...state,
                items: action.items.items.filter(x => x.isChecked === true).map(x => x)
            }

        case UNCHECKED_LIST:
            return {
                ...state,
                items: action.items.items.filter(x => x.isChecked === false).map(x => x)
            }
        default:
            return state;
    }
}