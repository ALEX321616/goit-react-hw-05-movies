import { useParams, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiMovieDetailsPage } from 'components/ApiService/ApiService';
import Cast from './Cast';
import Reviews from './Reviews';
import CardFilms from 'components/CardFilms/CardFilms';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [cardFilm, setCardFilm] = useState(null);
  const location = useLocation();
  const fromPath = location.state?.from;

  useEffect(() => {
    ApiMovieDetailsPage(movieId).then(data => {
      const { popularity, id, genres, title, poster_path, overview } = data;
      setCardFilm({
        popularity,
        id,
        genres,
        title,
        poster_path,
        overview,
      });
    });
  }, [movieId]);

  return (
    <>
      <Link to={`${fromPath}`}>Go back</Link>
      {cardFilm && <CardFilms cardFilm={cardFilm} />}
      <p>
        <Link to="cast" state={{ from: fromPath }}>
          Cast
        </Link>
      </p>
      <p>
        <Link to="reviews" state={{ from: fromPath }}>
          Reviews
        </Link>
      </p>
      <hr color="#321616" />

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
