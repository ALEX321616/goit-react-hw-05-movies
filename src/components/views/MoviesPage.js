import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApiMoviesPage } from 'components/ApiService/ApiService';
import ListMovies from 'components/ListMovies/ListMovies';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [searchFilms, setSearchFilms] = useState('');

  const onSearch = e => {
    setSearchFilms(e.currentTarget.value);
    setPage(1);
    setFilms([]);
    setSearchParams({});
  };

  const queryMovie = searchParams.toString().trim().toLowerCase();

  useEffect(() => {
    if (queryMovie) {
      ApiMoviesPage(queryMovie)
        .then(data => {
          if (!data.results.length & (page === 1)) {
            setSearchParams({});
            setFilms([]);
            return;
          }
          if (data.total_pages !== page) {
            setPage(prevPage => prevPage + 1);
          }
          setFilms(data.results);
        })
        .catch(error => {
          setSearchParams({});
          setFilms([]);
          console.log(error);
        });
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchFilms) {
      setSearchParams({
        query: searchFilms.trim().toLowerCase(),
        page: page,
      });
    } else {
      setSearchParams({});
    }
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
        <button type="submit">
          {(page > 1) & (searchParams.get('page') > 0)
            ? `Search on page ${searchParams.get('page')}`
            : 'submit '}
        </button>
      </form>

      {films.length > 0 && <ListMovies data={films} />}
    </>
  );
}
