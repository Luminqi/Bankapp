import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
//在目录下找对应的接口？（./todes/index.js）
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

//for React Perf
// import Perf from 'react-addons-perf';
const win = window;
// win.Perf = Perf;

//combineReducers 接收一个对象，对象的key值为state树相应的子状态字段
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

//for redux-immutable-state-invariant and Redux Devtools
const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);
export default createStore(reducer, {}, storeEnhancers);
