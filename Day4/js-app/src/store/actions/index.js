import { SHOW_CONTENT, SAVE_DATA, REMOVE_DATA } from '../types';

export function showContent(payload) {
    return { type: SHOW_CONTENT, payload };
}

export function saveData(payload) {
    return { type: SAVE_DATA, payload };
}

export function removeData() {
    return { type: REMOVE_DATA };
}

export function getTodos() {
    return (dispatch, getState) => {
        const { todos } = getState();
        if (todos.length > 0) {
            return;
        }
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                dispatch(saveData(json));
            });
    }
}