import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addtask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addtask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleChange}
        placeholder='Add task....'
        className='task-input'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          Add Task
        </button>

        <button onClick={clearList} className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
