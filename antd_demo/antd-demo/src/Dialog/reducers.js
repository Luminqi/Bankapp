import { SHOWMODAL, HIDEMODAL, UPDATECONTENT } from './actionTypes';

export default (state = { visible: false, title: '', progress: 'loading', content: ''}, action) => {
    switch(action.type) {
        case HIDEMODAL: {
            return {...state, visible: action.visible};
        }
        case SHOWMODAL: {
            return {...state, visible: action.visible, title: action.title, progress: action.progress, content: action.content };
        }
        case UPDATECONTENT: {
            return {...state, content: action.content};
        }
        default: {
            return state;
        }
    }
};
