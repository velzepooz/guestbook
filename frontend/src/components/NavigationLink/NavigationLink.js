import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';
import { NavigationLinkShapes } from '../../Shapes/Shapes';

export const NavigationLink = ({ path, name, isExact }) => {
  return (
    <NavLink
      className={styles.navigationLink}
      activeClassName={styles.navigationLink_active}
      to={path}
      exact={isExact}
    >
      {name}
    </NavLink>
  );
};

NavigationLink.propTypes = NavigationLinkShapes;
