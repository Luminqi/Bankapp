import {TRANSACTION} from './actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case TRANSACTION: {
            return [
                {
                    id: action.id,
                    date: action.timestamp,
                    type: action.type,
                    account: action.account,
                    amount: action.amount
                },
                ...state
            ]
        }
        default: {
            return state;
        }
    }
};
