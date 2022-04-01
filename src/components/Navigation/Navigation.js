import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Movies
          </NavLink>
        </nav>
        <hr color="#321616" />
      </header>
    </>
  );
}
