import {
    SET_USERNAME
} from './../Actions/types';

const INITIAL_STATE = {
    username: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_USERNAME:
            return{...state, username: action.payload};
        default:
            return {...state};
    };
}