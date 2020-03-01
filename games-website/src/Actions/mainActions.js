import {
    SET_USERNAME
} from './types';

// Sets the username for the user into the store
export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}