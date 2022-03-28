import { useParams, Route, Routes, Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiMovieDetailsPage } from 'components/ApiService/ApiService';
import Cast from './Cast';
import Reviews from './Reviews';
import CardFilms from 'components/CardFilms/CardFilms';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [cardFilm, setCardFilm] = useState(null);

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
      <NavLink to={`/movies`}>Go back</NavLink>
      {cardFilm && <CardFilms cardFilm={cardFilm} />}
      <p>
        <Link to={`cast`}>Cast</Link>
      </p>
      <p>
        <Link to={`reviews`}>Reviews</Link>
      </p>
      <hr color="#321616" />

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}
