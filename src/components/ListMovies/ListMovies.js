import { NavLink } from 'react-router-dom';
import s from './ListMovies.module.css';

function ListMovies({ data }) {

  return (
    <>
      <ul className={s.list}>
        {data.map(({ id, title }) => (
          <li key={id}>
            <NavLink exact="true" className={s.link} to={`/movies/${id}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListMovies;
