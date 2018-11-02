import React from 'react';
import PropTypes from 'prop-types';

import styles from './Task.module.css';

function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return(
    <div className={`${styles.listItem} ${state}`}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span onClick={() => onArchiveTask(id)}></span>
      </label>
      <div className={styles.title}>
        <input type="text" value={title} readOnly={true} placeholder="Title" />
      </div>
      <div className={styles.actions} onClick={ e => e.stopPropagation()}>
        { state != 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className="icon-star"></span>
          </a>
        )}
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default Task;
