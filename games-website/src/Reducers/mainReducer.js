import {
    TEST_ACTION
} from './../Actions/types';

const INITIAL_STATE = {
    labelColor: "black"
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TEST_ACTION: 
            return{...state, labelColor: action.payload};
        default:
            return {...state};
    };
}