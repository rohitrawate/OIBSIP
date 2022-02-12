import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button.js';

function TodoModal({ type, modalOpen, setmodalOpen, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      // Checking if the title is empty or not
      toast.error('Please enter a title');
      return;
    }
    // console.log({ title, status });
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task Added Successfully');
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          // Checking if old todo and new todo title are not Same after updating
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
          // toast.error('No changes made'),
        } else {
          toast.error('No changes made');
        }
      }
      setmodalOpen(false);
    }
  };
  return (
    // <div>
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setmodalOpen(false)}
            onKeyDown={() => setmodalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === 'update' ? 'Update' : 'Add'}
              Task
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === 'update' ? 'Update ' : 'Add '}
                Task
              </Button>
              <Button
                type="submit"
                variant="secondary"
                onClick={() => setmodalOpen(false)}
                onKeyDown={() => setmodalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
    // </div>
  );
}

export default TodoModal;
