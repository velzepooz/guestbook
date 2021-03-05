import React from 'react';
import styles from './Review.module.scss';
import { ReviewHeading } from '../ReviewHeading/ReviewHeading';
import { ReviewInfo } from '../ReviewInfo/ReviewInfo';
import { ReviewBody } from '../ReviewBody/ReviewBody';
import { ReviewShapes } from '../../Shapes/Shapes';

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <ReviewHeading title={review.title} />
      <ReviewInfo date={review.date} author={review.author} />
      <ReviewBody text={review.message} />
    </div>
  );
};

Review.propTypes = ReviewShapes;
