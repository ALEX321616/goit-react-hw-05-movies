import { useState, useEffect } from 'react';
import { ApiHomePage } from 'ApiService/ApiService';
import ListMovies from '../components/ListMovies/ListMovies';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiHomePage().then(data => {
      setMovies(data.data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListMovies data={movies} />
    </>
  );
}
