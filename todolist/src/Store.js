import {createStore, combineReducers} from 'redux';
//在目录下找对应的接口？（./todes/index.js）
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';
//combineReducers 接收一个对象，对象的key值为state树相应的子状态字段
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default createStore(reducer);
