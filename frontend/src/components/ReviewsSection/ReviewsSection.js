import React from 'react';
import { ReviewsShapes } from '../../Shapes/Shapes';
import { Review } from '../Review/Review';

export const ReviewsSection = ({ reviews }) => {
  return (
    <section>
      {reviews.map((review) => {
        return <Review review={review} key={review.id} />;
      })
      }
    </section>
  );
};

ReviewsSection.propTypes = ReviewsShapes;
