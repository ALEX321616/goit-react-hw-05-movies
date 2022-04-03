import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from '../views/HomePage';
import Loader from './Loader/Loader';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = lazy(() => import('../views/MoviesPage'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const Cast = lazy(() => import('../views/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));
const App = () => {

  return (
    <>
        <ToastContainer
        position="top-center"
        autoClose={1200}
        closeOnClick
        rtl={false}
        transition={Zoom}
      />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies/" element={<MoviesPage />} />
            <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
              <Route path="cast/" element={<Cast />} />
              <Route path="reviews/" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
