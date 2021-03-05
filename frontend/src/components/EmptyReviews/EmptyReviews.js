import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyReviews.module.scss';

export const EmptyReviews = () => {
  return (
    <div className={styles.empty}>
      There are no reviews right now. Be the first.
      {' '}
      <Link className={styles.link} to="/addReview">Left review</Link>
    </div>
  );
};
