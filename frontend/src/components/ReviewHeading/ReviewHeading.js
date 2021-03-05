import React from 'react';
import styles from './ReviewHeading.module.scss';
import { ReviewHeadingShapes } from '../../Shapes/Shapes';

export const ReviewHeading = ({ title }) => {
  return (
    <h6 className={styles.heading}>{title}</h6>
  );
};

ReviewHeading.propTypes = ReviewHeadingShapes;
