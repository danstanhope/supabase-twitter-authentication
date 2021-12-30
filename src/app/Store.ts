import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/Root';
import thunk from 'redux-thunk';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
