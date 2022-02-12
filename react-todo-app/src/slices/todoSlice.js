import { createSlice } from '@reduxjs/toolkit';
// import TodoItem from '../components/TodoItem';
// import { withRouter } from 'react-router-dom';
// import { createSelectorCreator } from 'reselect';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  // window.localStorage.setItem('todoList', JSON.stringify([]));
  window.localStorage.setItem('todoList', []);
  return [];
};

const initalValue = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initalValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      // state.localTodoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList'); // Getting/Fetching the item from storage
      if (todoList) {
        const todoListArr = JSON.parse(todoList); // To Change the String into Array by Parse() i.e JSON obj => JS obj
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr)); // To Change the JS object into  JSON Obj(string)
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
