import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
// import {toggleTodo, removeTodo} from '../actions.js';

//using reselect
import {selectVisibleTodos} from '../selector.js';

// import {FilterTypes} from '../../constants.js';

//import {bindActionCreators} from 'redux';
// const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
//     return (
//         <ul className="todo-list">
//         {
//             todos.map((item) => (
//                 <TodoItem
//                     key={item.id}
//                     text={item.text}
//                     completed={item.completed}
//                     onToggle={() => onToggleTodo(item.id)}
//                     onRemove={() => onRemoveTodo(item.id)}
//                 />
//             ))
//         }
//         </ul>
//     );
// };

const TodoList = ({todos}) => {
    return (
        <ul className="todo-list">
        {
            todos.map((item) => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                />
            ))
        }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
    // onToggleTodo: PropTypes.func.isRequired,
    // onRemoveTodo: PropTypes.func.isRequired
};

// const selectVisibleTodos = (todos, filter) => {
//     switch(filter) {
//         case FilterTypes.ALL:
//             return todos;
//         case FilterTypes.COMPLETED:
//             return todos.filter(item => item.completed);
//         case FilterTypes.UNCOMPLETED:
//             return todos.filter(item => !item.completed);
//         default:
//          throw new Error('unsupported filter');
//     }
// };
//mapStateToProps和mapDispatchToProps返回的对象的键值对和展示组件（傻瓜组件）需要的外部props一一对应（键为props标签）
//本质上是把对state的操作和分发action的操作从展示组件中提取出来放到容器组件中，并作为props传入展示组件，展示组件只需要专注于渲染DOM。
// const mapStateToProps = (state) => {
//     return {
//         todos: selectVisibleTodos(state.todos, state.filter)
//     };
// };
const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onToggleTodo: (id) => {
//             dispatch(toggleTodo(id));
//         },
//         onRemoveTodo: (id) => {
//             dispatch(removeTodo(id));
//         }
//     };
// };

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}, dispatch);
*/

/*
const mapDispatchToProps = {
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
};
*/

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps)(TodoList);
