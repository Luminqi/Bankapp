import {TRANSACTION} from './actionTypes';
let actionId = 0;

export const transaction = (datedTx) => ({
    ...datedTx,
    type: TRANSACTION,
    id: actionId ++
});
