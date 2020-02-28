import { combineReducers } from 'redux';

// Reducers
import mainReducer from './mainReducer';

/*
Combines all the reducers that I create. Is used to create the store
that is used in index.js of the Reducers foldre.
*/
export default combineReducers( {
    main: mainReducer
});