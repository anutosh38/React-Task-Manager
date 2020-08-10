import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      title: 'Read the book',
      id: 1,
    },
    {
      title: 'Wash the car',
      id: 2,
    },
    {
      title: 'Write some code',
      id: 3,
    },
  ]);

  const addtask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  const [editItem, setEditItem] = useState(null);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    // setEditItem();
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addtask,
        removeTask,
        clearList,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
