import {TRANSACTION} from './actionTypes';
import moment from 'moment';

export default (state = [], action) => {
    switch(action.type) {
        case TRANSACTION: {
            return [
                {
                    id: action.id,
                    date: moment(action.date).format('MM/DD/YYYY'),
                    kind: action.kind,
                    account: action.account,
                    amount: action.amount,
                    balance: action.balance
                },
                ...state
            ]
        }
        default: {
            return state;
        }
    }
};
