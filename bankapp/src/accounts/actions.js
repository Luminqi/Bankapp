import {DEPOSIT, WITHDRAW} from './actionTypes';

// const deposit = (account, amount) => ({
//     type: DEPOSIT,
//     account: account,
//     amount: amount
// });
// const withdraw = (account, amount) => ({
//     type: WITHDRAW,
//     account: account,
//     amount: amount
// });

const deposit = (account, amount) => {
    console.log('deposit');
    return {
        type: DEPOSIT,
        account: account,
        amount: amount
    };
};
const withdraw = (account, amount) => {
    console.log('withdraw');
    return {
        type: WITHDRAW,
        account: account,
        amount: amount
    };
};

export {deposit, withdraw};
