import React from 'react';
import styles from './PageHeading.module.scss';
import { PageHeadingShapes } from '../../Shapes/Shapes';

export const PageHeading = ({ title }) => {
  return (
    <h1 className={styles.heading}>{title}</h1>
  );
};

PageHeading.propTypes = PageHeadingShapes;
