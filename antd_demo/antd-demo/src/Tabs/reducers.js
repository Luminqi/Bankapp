import { CHANGETAB } from './actionTypes';

export default (state = '1', action) => {
    switch(action.type) {
        case CHANGETAB: {
            return action.key;
        }
        default: {
            return state;
        }
    }
};
