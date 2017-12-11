import React from 'react';
import {view as Accounts} from './accounts/';
import {view as Transactions} from './transactions/';

function Bankapp() {
    return [
        <Accounts />,
        <Transactions />
    ];
}
export default Bankapp;
