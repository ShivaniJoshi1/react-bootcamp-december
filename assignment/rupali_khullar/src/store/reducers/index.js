import { SHOW_CONTENT, SAVE_DATA, REMOVE_DATA } from '../types';

const initialState = {
    show: false,
    todos: []
}

function rootReducer(state = initialState, action) {
    if (action.type === SHOW_CONTENT) {
        return { ...state, show: action.payload };
    }

    if (action.type === SAVE_DATA) {
        return { ...state, todos: action.payload };
    }

    if (action.type === REMOVE_DATA) {
        return { ...state, todos: [] };
    }

    return state;
}

export default rootReducer;
