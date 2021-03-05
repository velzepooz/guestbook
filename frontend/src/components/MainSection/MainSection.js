import React from 'react';
import styles from './MainSection.module.scss';
import { MainSectionShapes } from '../../Shapes/Shapes';

export const MainSection = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

MainSection.propTypes = MainSectionShapes;
