import {
    TEST_ACTION
} from './types';

export const  changeLabelColor = () => {
    return {
        type: TEST_ACTION,
        payload: "blue"
    };
};