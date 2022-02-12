import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button.js';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice.js';

function AppHeader() {
  const [modalOpen, setmodalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  // const [filterStatus, setFilterStatus] = useState('all'); // useState('all');

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    // setFilterStatus(e.target.status);
    dispatch(updateFilterStatus(e.target.value));
    console.log('updating value ALL');
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setmodalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        variant="secondary"
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
        onClick={updateFilter}
      >
        <option value="all">ALL</option>
        <option value="incomplete">Pending</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
    </div>
  );
}

export default AppHeader;
