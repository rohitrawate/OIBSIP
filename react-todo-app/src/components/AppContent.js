import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import TodoItem from './TodoItem';
import styles from '../styles/modules/app.module.scss';
// import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);

  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : ' no  To-do found'}
    </motion.div>
  );
}

export default AppContent;

// {sortedTodoList && sortedTodoList.length > 0
//   ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
//   : 'no to do found'}
