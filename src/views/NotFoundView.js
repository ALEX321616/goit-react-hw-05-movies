import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return (
    <>
      <Link to={'/'}> Go to Home </Link>
      <div className="NotFoundView">404 Page not found</div>
    </>
  );
}
