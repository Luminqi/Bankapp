import { CHANGELOCALE } from './actionTypes.js';
import en_US from '../Locales/en-US.js';

export default (state = { locales:'zh-CN', messages:en_US.messages }, action) => {
    switch(action.type) {
        case CHANGELOCALE: {
            return {...state, locales: action.locales, messages: action.messages}
        }
        default: {
            return state;
        }
    }
};
