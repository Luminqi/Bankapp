import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="filter selected">{children}</b>;
    } else {
        return (
            // eslint-disable-next-line
            <a href="#" className="filter not-selected" onClick={
                (ev) => {
                    ev.preventDefault();
                    onClick();
                }
            }>
                {children}
            </a>
        );
    }
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired, //children是子组件，proptype是node？
    onClick: PropTypes.func.isRequired
}

//ownProps是容器组件接收到的props
const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
