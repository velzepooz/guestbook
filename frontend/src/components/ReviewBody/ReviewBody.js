import React from 'react';
import styles from './ReviewBody.scss';
import { ReviewBodyShapes } from '../../Shapes/Shapes';

export const ReviewBody = ({ text }) => {
  return (
    <p className={styles.paragraph}>{text}</p>
  );
};

ReviewBody.propTypes = ReviewBodyShapes;
