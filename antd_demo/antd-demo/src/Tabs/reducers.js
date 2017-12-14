import { CHANGETAB } from './actionTypes';

export default (state = { tabKey: '1'}, action) => {
    switch(action.type) {
        case CHANGETAB: {
            return {...state, tabKey: action.key};
        }
        default: {
            return state;
        }
    }
};


// initialState= {
//     tabKey: '1'
// }
