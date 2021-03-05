import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import styles from './ReviewPage.module.scss';
import { PageHeading } from '../../components/PageHeading/PageHeading';
import { ReviewsSection } from '../../components/ReviewsSection/ReviewsSection';
import { MainSection } from '../../components/MainSection/MainSection';
import { getReviewsFromServer } from '../../api/getReviewsFromServer';
import { Loader } from '../../components/Loader/Loader';

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    const fetchData = async() => {
      try {
        setFetching(true);
        const reviewsFromServer = await getReviewsFromServer();

        setReviews(reviewsFromServer);
        setFetching(false);
      } catch (e) {
        setFetching(false);
        alert.show('Ooops! Something went wrong. Try again later!');
      }
    };

    fetchData();
  }, [alert]);

  return (
    <MainSection>
      <PageHeading title="Guest Book" />
      { isFetching
        ? (<div className={styles.loader}><Loader /></div>)
        : <ReviewsSection reviews={reviews} /> }
    </MainSection>
  );
};
