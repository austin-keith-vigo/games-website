import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';

/*
Grabs the reducers that has been combined by the index.js of the Reducers folder.
It uses the reducers and creates the store that is then used in the main index.js.
It becomes the main store of the app
*/
export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(thunk)
    );
}