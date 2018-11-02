import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import styles from './TaskList.module.css';

function TaskList({ loading, tasks, onPinTask, onArchivedTask }) {
  const events = {
    onPinTask,
    onArchivedTask
  };

  const LoadingRow = (
    <div className={styles.loadingItem}>
      <span className={styles.glowCheckbox}></span>
      <span className={styles.glowText}>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );


  if(loading) {
    return (
      <div className={styles.listItems}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if(tasks.length === 0) {
    return (
      <div className={styles.listItems}>
        <div className={styles.wrapperMessage}>
         <span className={styles.iconCheck} />
         <div className={styles.titleMessage}>You have no tasks</div>
         <div className={styles.subtitleMessage}>Sit back and relax</div>
        </div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return(
    <div className={styles.listItems}>
      {tasksInOrder.map( task => <Task key={task.id} task={task} {...events} />)}
    </div>
  )
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList;
