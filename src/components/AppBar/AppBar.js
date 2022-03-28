import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
