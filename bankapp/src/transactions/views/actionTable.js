import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const ActionTable = ({accounts, transactions}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Account</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
            {
                transactions.map((item) => (
                <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.type}</td>
                    <td>{item.account}</td>
                    <td>{item.amount}</td>
                    <td>{accounts[item.account]}</td>
                </tr>
                ))
            }
            </tbody>
        </table>
    )
}

ActionTable.propTypes = {
    accounts: PropTypes.shape({
        checking: PropTypes.number.isRequired,
        savings: PropTypes.number.isRequired
    }).isRequired,
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        account: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        accounts: state.accounts,
        transactions: state.transactions
    };
};

export default connect(mapStateToProps)(ActionTable);
