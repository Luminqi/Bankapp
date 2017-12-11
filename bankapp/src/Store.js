// eslint-disable-next-line
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as accountReducer} from './accounts/';
import {reducer as transactionReducer} from './transactions/';
import {createEpicMiddleware} from 'redux-observable';
import {epic as transactionEpic} from './transactions/';

const reducer = combineReducers({
    accounts: accountReducer,
    transactions: transactionReducer
});
const epicMiddleware = createEpicMiddleware(transactionEpic);

export default createStore(reducer, applyMiddleware(epicMiddleware));
