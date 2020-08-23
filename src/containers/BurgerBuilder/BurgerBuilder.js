import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICES ={
  ensalada: 0.5,
  queso: 0.4,
  carne: 1.3,
  tocino: 0.7
}


class BurgerBuilder extends Component {

  state = {
    purchasing: false,
    loading: false
  }

  componentDidMount () {
    console.log(this.props);
  }

  componentWillMount() {
    console.log(this.props);
    // axios.get('https://buena-hamburguesa.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     this.setState({ingredients: {
    //       ensalada: response.data.ensalada,
    //       tocino: response.data.tocino,
    //       queso: response.data.queso,
    //       carne: response.data.carne
    //     }});
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      },0);
    return sum > 0;
  }

  purhcaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purhcaseHandler = () => {
    this.setState({ purchasing: true });
  }
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  }

  render () {
    const disabledInfo = {
      ...this.state.ings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    
    
    let burger = <Spinner />;
    if(this.props.ings){
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings}/>
          <BuildControls 
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                purchasable={this.updatePurchaseState(this.props.ings)}
                price={this.props.price}
              handleOrder={this.purhcaseHandler}/>
        </Aux>    
      );
      orderSummary = <OrderSummary 
        ingredients={this.props.ings}
        price={this.props.price}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinueHandler={this.purchaseContinueHandler}/>;
      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }
    
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchProps = dispatch =>{
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchProps)(withErrorHandler(BurgerBuilder, axios));
