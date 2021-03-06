import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ApiMoviesPage } from '../ApiService/ApiService';
import ListMovies from 'components/ListMovies/ListMovies';
import { toast } from 'react-toastify';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [searchFilms, setSearchFilms] = useState('');
  const location = useLocation();

  const onSearch = e => {
    if (searchParams.get('query')) {
      setSearchParams({});
    }
    setFilms([]);
    setSearchFilms(e.currentTarget.value);
  };

  useEffect(() => {
    if (!searchParams.get('query')) {
      setSearchParams({});
      setFilms([]);
      return;
    }

    ApiMoviesPage(searchParams.toString()).then(data => {
      if (!data.data.results.length) {
        toast('Movie not found');
        setSearchParams({});
        return;
      }
      setFilms(data.data.results);
    });
  }, [searchParams, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({});
    setSearchFilms('');
    const toFormatString = e.currentTarget.search.value.trim().toLowerCase();
    setSearchParams({ query: toFormatString });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onSearch}
          value={searchFilms}
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Enter the title"
        />
        <button type="submit">Submit</button>
        {films && <ListMovies data={films} state={{ from: location }} />}
      </form>
    </>
  );
}
