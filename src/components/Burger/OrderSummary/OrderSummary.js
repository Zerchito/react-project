import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSumary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });
  return (
    <Aux>
      <h3>Tu Pedido</h3>
      <p>Una hamburguesa deliciosa con los siguientes ingredientes:</p>
      <ul>
        {ingredientSumary}
      </ul>
      <p>Precio total: {props.price.toFixed(2)}</p>
      <p>Proceder a pagar?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCELAR</Button>
      <Button btnType='Success' clicked={props.purchaseContinueHandler}>CONTINUAR</Button>
    </Aux>
  );
};

export default orderSummary;
