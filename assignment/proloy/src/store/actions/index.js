import { SAVE_ITEMS, REMOVE_ITEMS } from '../types';

export function saveItems(payload) {
    return { type: SAVE_ITEMS, payload };
}

export function removeItems() {
    return { type: REMOVE_ITEMS };
}

export function loadItems() {
    return (dispatch, getState) => {
        const { items } = getState();
        if (items.length > 0) {
            return;
        }
        fetch('https://fortnite-api.theapinetwork.com/store/get')
            .then(response => response.json())
            .then(json => {
                dispatch(saveItems(json.data));
            });
    }
}