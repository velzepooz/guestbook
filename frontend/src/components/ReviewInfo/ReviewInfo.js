import React from 'react';
import styles from './ReviewInfo.module.scss';
import { ReviewInfoShapes } from '../../Shapes/Shapes';

const toDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
};

export const ReviewInfo = ({ date, author }) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{author}</span>
      <span className={styles.separator} />
      <span className={styles.date}>{toDate(date)}</span>
    </div>
  );
};

ReviewInfo.propTypes = ReviewInfoShapes;
