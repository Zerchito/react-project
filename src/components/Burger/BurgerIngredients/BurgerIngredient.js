import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}> </div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}> </div>
            <div className={classes.Seeds2}> </div>
          </div>
        );
        break;
      case ('carne'):
        ingredient = <div className={classes.Meat}> </div>;
        break;
      case ('queso'):
        ingredient = <div className={classes.Cheese}> </div>;
        break;
      case ('tocino'):
        ingredient = <div className={classes.Bacon}> </div>;
        break;
      case ('ensalada'):
        ingredient = <div className={classes.Salad}> </div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
