import React from 'react';
import { Modal } from 'antd';
import { hidemodal } from '../actions'
import { connect } from 'react-redux';

const Dialog = ({ visible, title, content, onCancel }) => {
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <div>{content}</div>
        </Modal>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        visible: state.dialog.visible,
        title: state.dialog.title,
        content: state.dialog.content
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCancel: () => dispatch(hidemodal())
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Dialog);
