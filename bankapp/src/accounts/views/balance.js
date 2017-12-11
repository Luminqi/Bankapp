import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deposit, withdraw} from '../actions.js';
class Balance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textInput: ''}; //React State! Do not confused with Redux State!!!
        this.onInputChange = this.onInputChange.bind(this);
        this.handleWithdraw = this.handleWithdraw.bind(this);
        this.handleDeposit = this.handleDeposit.bind(this);
        this.chosenRadio = this.chosenRadio.bind(this);
    }
    onInputChange(ev) {
        let value = ev.target.value;
        if (/^\d+\u002E\d{1,2}$|^\d*$/.test(value)) {
            this.setState({textInput: value});
        }
    }
    chosenRadio() {
        if ((!this.checkRadio.checked && !this.saveRadio.checked) || !this.state.textInput) return false;
        if (this.checkRadio.checked) {
            return this.checkRadio;
        } else {
            return this.saveRadio;
        }
    }
    handleWithdraw() {
        let radio = this.chosenRadio();
        if (radio) {
            this.props.onWithdraw(radio.value, this.state.textInput);
        }
    }
    handleDeposit() {
        let radio = this.chosenRadio();
        if (radio) {
            this.props.onDeposit(radio.value, this.state.textInput);
        }
    }

    render() {
        const {checking, savings} = this.props;
        return [
            <div>
                <h3>Checking: {checking}</h3>
                <h3>Savings: {savings}</h3>
            </div>,
            <div>
                <form>
                $
                <input type="text" value={this.state.textInput} onChange={this.onInputChange} />
                <input type="radio" value="checking" name="account" ref={node => this.checkRadio = node} />
                <label>checking</label>
                <input type="radio" value="savings" name="account" ref={node => this.saveRadio = node} />
                <label>savings</label>
                </form>
                <button onClick={this.handleWithdraw}>Withdraw</button>
                <button onClick={this.handleDeposit}>Deposit</button>
            </div>
        ];
    }
}

Balance.propTypes = {
    checking: PropTypes.number.isRequired,
    savings: PropTypes.number.isRequired,
    onWithdraw: PropTypes.func.isRequired,
    onDeposit: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        checking: state.accounts.checking,
        savings: state.accounts.savings
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onWithdraw: (account, amount) => dispatch(withdraw(account, amount)),
        onDeposit: (account, amount) => dispatch(deposit(account, amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
