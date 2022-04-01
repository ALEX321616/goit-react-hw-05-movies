import { useParams } from 'react-router-dom';
import { ApiReviews } from 'components/ApiService/ApiService';
import { useState, useEffect } from 'react';
import ReviewsList from 'components/ReviewsList/ReviewsList';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <>
          <ReviewsList data={reviews} />
        </>
      )}
    </>
  );
}
