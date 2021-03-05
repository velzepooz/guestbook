import React from 'react';
import styles from './Header.module.scss';
import { HeaderShapes } from '../../Shapes/Shapes';

export const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  );
};

Header.propTypes = HeaderShapes;
