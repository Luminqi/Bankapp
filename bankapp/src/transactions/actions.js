import {TRANSACTION} from './actionTypes';
let actionId = 0;
// export const transaction = (datedTx) => ({
//     type: TRANSACTION,
//     id: actionId++,
//     ...datedTx
// });


export const transaction = (datedTx) => {
    console.log("transaction", actionId);
    return {
        type: TRANSACTION,
        id: actionId++,
        ...datedTx
    };
};
