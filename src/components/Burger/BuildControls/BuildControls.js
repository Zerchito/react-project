import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Ensalada', type: 'ensalada' },
  { label: 'Tocino', type: 'tocino' },
  { label: 'Queso', type: 'queso' },
  { label: 'Carne', type: 'carne' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Precio Actual: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        disabled={props.disabled[control.type]}
        handleAdd={() => props.ingredientAdded(control.type)}
        handleRemove={() => props.ingredientRemoved(control.type)}
      />
    ))}
    <button
      disabled={!props.purchasable}
      className={classes.OrderButton}
      onClick={props.handleOrder} > Pide Ya! </button>
  </div>
);

export default buildControls;
