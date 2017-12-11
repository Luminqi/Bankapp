import {DEPOSIT, WITHDRAW} from './actionTypes.js'

export default (state = {checking: 100, savings: 100}, action) => {
    switch(action.type) {
        case DEPOSIT:
            return {...state, [action.account]: state[action.account] + parseFloat(action.amount)};
        case WITHDRAW:
            return {...state, [action.account]: state[action.account] - parseFloat(action.amount)};
        default:
            return state;
    }
};
