import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as changetabReducer } from './Tabs/';
import { reducer as dialogReducer } from './Dialog/';
import { createEpicMiddleware } from 'redux-observable';
import showContentEpic from './Epics/epics.js'


const reducer = combineReducers({
    tabKey: changetabReducer,
    dialog: dialogReducer
});
const epicMiddleware = createEpicMiddleware(showContentEpic);

export default createStore(reducer, applyMiddleware(epicMiddleware));



// initialState= {
//     tabKey: '1',
//     dialog: {
//         visible: false||true,
//         title: 'React',
//         progress: 'loading'||'error'||'complete',
//         content: ''
//     }
// }
