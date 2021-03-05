import React from 'react';
import { ReviewsShapes } from '../../Shapes/Shapes';
import { Review } from '../Review/Review';
import { EmptyReviews } from '../EmptyReviews/EmptyReviews';

export const ReviewsSection = ({ reviews }) => {
  return (
    <section>
      {reviews.length > 0
        ? (reviews.map((review) => {
          return <Review review={review} key={review.id} />;
        })
        )
        : (<EmptyReviews />)
      }
    </section>
  );
};

ReviewsSection.propTypes = ReviewsShapes;
