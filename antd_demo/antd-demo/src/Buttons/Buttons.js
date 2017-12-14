import React from 'react';
import { Icon } from 'antd';
import { changetab } from '../Tabs/'
import { connect } from 'react-redux';

const Buttons = ({storedKey, onChangeTab}) => {
    if (storedKey === '1') {
        return (
            <Icon type="double-right" className="icon-dr" onClick={() => onChangeTab((parseInt(storedKey, 10) + 1).toString())} />
        );
    } else if (storedKey === '3') {
        return (
            <Icon type="double-left" className="icon-dl" onClick={() => onChangeTab((parseInt(storedKey, 10) - 1).toString())} />
        );
    } else {
        return (
            <React.Fragment>
                <Icon type="double-right" className="icon-dr" onClick={() => onChangeTab((parseInt(storedKey, 10) + 1).toString())} />
                <Icon type="double-left" className="icon-dl" onClick={() => onChangeTab((parseInt(storedKey, 10) - 1).toString())} />
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        storedKey: state.tabKey
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeTab: (key) => dispatch(changetab(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
