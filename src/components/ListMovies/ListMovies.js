import { NavLink, useLocation } from 'react-router-dom';
import s from './ListMovies.module.css';

function ListMovies({ data }) {
  const { pathname, search } = useLocation();

  return (
    <>
      <ul className={s.list}>
        {data.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              exact="true"
              className={s.link}
              to={`/movies/${id}`}
              state={{ from: pathname + search }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListMovies;
