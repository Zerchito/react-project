import React from 'react';
import classes from './Order.css';

const order = (props) => {
  const ingredients = [];
  for (const ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inlineBlock',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={ig.name} >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Precio: <strong>Bs. {+props.price.toFixed(2)}</strong></p>
    </div>
  );
};

export default order;
