import {ofType} from 'redux-observable';
import Rx from 'rxjs/Rx';
import {timestamp, map, mapTo, mergeMap} from 'rxjs/operators';
import {actionTypes as accountTypes} from '../accounts/';
import {transaction} from './actions.js'
import PouchDB from 'pouchdb';


const txDb = new PouchDB('http://192.168.1.4:5984/bankapp');
const transactionEpic = (action$, store) =>
    action$.pipe(
        ofType(accountTypes.DEPOSIT, accountTypes.WITHDRAW),
        map(action => ({...action, kind: action.type})),
        map(data => ({...data, balance: store.getState().accounts[data.account]})),
        timestamp(),
        map(obj => ({...obj.value, date: obj.timestamp})),
        mergeMap(datedTx =>
            Rx.Observable.fromPromise(txDb.post(datedTx)).pipe(
                mapTo(transaction(datedTx))
            )
        )
    );

export default transactionEpic;
