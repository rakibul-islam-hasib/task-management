import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  console.log(tasks)
  return (
    <div className=''>
      <h1>Task name ---------&gt; status --------&gt; </h1>
      <div className="">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
