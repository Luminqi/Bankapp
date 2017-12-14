import { createStore } from 'redux';
import { reducer as changetabReducer } from './Tabs/';

export default createStore(changetabReducer);
