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


// initialState= {
//     tabKey: '1',
//     dialog: {
//         visible: false||true,
//         progress: 'loading'||'error'||'complete',
//         content: ''
//     }
// }
