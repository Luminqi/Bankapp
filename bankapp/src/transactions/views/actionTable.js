import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const ActionTable = ({transactions}) => {
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
                    <td>{item.kind}</td>
                    <td>{item.account}</td>
                    <td>{item.amount}</td>
                    <td>{item.balance}</td>
                </tr>
                ))
            }
            </tbody>
        </table>
    )
}

ActionTable.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        kind: PropTypes.string.isRequired,
        account: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        transactions: state.transactions
    };
};

export default connect(mapStateToProps)(ActionTable);
