import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.handleRemove}
      disabled={props.disabled}> menos </button>
    <button className={classes.More} onClick={props.handleAdd}>mas</button>
  </div>
);

export default buildControl;
