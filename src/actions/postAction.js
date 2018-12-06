import { FETCH_POST, NEW_POST, FETCH_POSTS,CHECKED_LIST,UNCHECKED_LIST,ALL_LIST } from './types';

export const createTodo = (postData) => dispatch => {
    console.log('create post called')

    dispatch({
        type: NEW_POST,
        payload: postData
    });
    
    dispatch({
        type: ALL_LIST,
        items: postData
    });

}


export const allTodo = (postData) => dispatch => {
    console.log('all todo called')

    dispatch({
        type: ALL_LIST,
        items: postData
    });

}


export const checkedTodo = (postData) => dispatch => {
    console.log('checked todo called',postData)

    dispatch({
        type: CHECKED_LIST,
        items: postData
    });

}

export const uncheckedTodo = (postData) => dispatch => {
    console.log('unchecked todo called')

    dispatch({
        type: UNCHECKED_LIST,
        items: postData
    });

}