import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Navigation.module.scss';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { NavigationShapes } from '../../Shapes/Shapes';

export const Navigation = ({ links }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {links.map((link) => {
          return (
            <li className={styles.navigationItem} key={uuidv4()}>
              <NavigationLink
                path={link.path}
                name={link.name}
                isExact={link.isExact}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.propTypes = NavigationShapes;
