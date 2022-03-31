import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './views/HomePage';

const MoviesPage = lazy(() => import('./views/MoviesPage'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies/*" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
