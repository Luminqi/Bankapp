import {ofType} from 'redux-observable';
import {timestamp, map, delay} from 'rxjs/operators';
import {actionTypes as accountTypes} from '../accounts/';
import {transaction} from './actions.js'

console.log(ofType);
// const transactionEpic = action$ =>
//     action$.pipe(
//         ofType(accountTypes.DEPOSIT, accountTypes.WITHDRAW),
//         timestamp(),
//         map(obj => ({...obj.value, date: obj.timestamp})),
//         map(datedTx => transaction(datedTx))
//     );

const transactionEpic = action$ =>
    action$.pipe(
        ofType(accountTypes.DEPOSIT, accountTypes.WITHDRAW),
        delay(1000),
        map(obj => ({...obj, date: '2017/12/12'})),
        map(datedTx => transaction(datedTx))
    );
export default transactionEpic;
