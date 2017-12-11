import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Bankapp from './Bankapp.js';
import store from './Store.js'

// const initialState = {
//     accounts: {checking: 100, savings: 100},
//     transactions: [
//         {
//             id: 0,
//             date: '2017/12/10',
//             type: 'deposit',
//             account: 'checking',
//             amount: '$1.00'
//         },
//         {
//             id: 1,
//             date: '2017/12/10',
//             type: 'withdraw',
//             account: 'savings',
//             amount: '$1.00'
//         }
//     ],
//     filter: 'all'
// }

ReactDOM.render(
    <Provider store={store}>
        <Bankapp />
    </Provider>,
    document.getElementById('root')
);
