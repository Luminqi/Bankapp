//what does state tree look like?
// {
//     todos: [
//         {
//             text: 'First todo',
//             completed: false,
//             id: 0
//         },
//         {
//             text: 'Second todo',
//             completed: false,
//             id: 1
//         }
//     ]
//     filter: 'all'
// }


import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';
//reducer函数签名和state树的设计有关
export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if(todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed}
                } else {
                    return todoItem;
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id; //筛选出所有不需要删除的事项
            })
        }
        default: {
            return state;
        }
    }
};
