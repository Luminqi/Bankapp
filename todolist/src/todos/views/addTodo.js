import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../actions.js'

//展示组件（傻瓜组件）
class AddTodo extends Component {
    //why input context(Provider?)
    constructor(props, context){
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    refInput(node) {
        this.input = node;
    }

    onSubmit(ev) {
        ev.preventDefault();
        const input = this.input;
        if (!input.value.trim()) {
            return;
        }
        this.props.onAdd(input.value); //call the onAdd input by props
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};
//容器组件能分发 action，可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text)) //分发addTodo这个action
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);
