import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = [];
  const keys = Object.keys(props.ingredients || {});
  if (props.ingredients && keys.length > 0) {
    transformedIngredients = keys
      .map(ingredientkey => {
        return [...Array(props.ingredients[ingredientkey])].map((_, i) => {
          return <BurgerIngredient key={ingredientkey + i} type={ingredientkey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      });
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Por favor comienza por agregar ingredientes.</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
