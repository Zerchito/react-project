import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>Crear Hamburguesa</NavigationItem>
    <NavigationItem link='/orders'>Pedidos</NavigationItem>
  </ul>
);

export default navigationItems;
