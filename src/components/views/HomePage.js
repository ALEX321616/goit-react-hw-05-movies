import { useState, useEffect } from 'react';
import { ApiHomePage } from 'components/ApiService/ApiService';
import ListMovies from '../ListMovies/ListMovies';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiHomePage().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListMovies data={movies} />
    </>
  );
}
