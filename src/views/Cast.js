import { useParams } from 'react-router-dom';
import { ApiMovieCast } from 'ApiService/ApiService';
import { useState, useEffect } from 'react';
import CastList from 'components/CastList/CastList';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiMovieCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? <p>No cast details.</p> : <CastList data={cast} />}
    </>
  );
}
