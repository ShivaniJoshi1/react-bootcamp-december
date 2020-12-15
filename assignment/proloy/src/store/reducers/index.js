import { SAVE_ITEMS, REMOVE_ITEMS } from '../types';

const initialState = {
    items: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_ITEMS: {
            return { ...state, items: action.payload };
        }
        case REMOVE_ITEMS: {
            return { ...state, items: [] };
        }
        default:
            return state;
    }
}

export default rootReducer;
