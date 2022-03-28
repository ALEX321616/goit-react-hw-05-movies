import axios from 'axios';

export function ApiHomePage() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=1095d1508496987a9fb37d15cac1d329&language=en-US&page=1`
    )
    .then(data => {
      return data.data;
    });
}

export function ApiMoviesPage(search) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1095d1508496987a9fb37d15cac1d329&${search}`
    )
    .then(data => {
      return data.data;
    });
}

export function ApiMovieDetailsPage(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1095d1508496987a9fb37d15cac1d329`
    )
    .then(data => {
      return data.data;
    });
}

export function ApiReviews(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=1095d1508496987a9fb37d15cac1d329`
    )
    .then(data => {
      return data.data;
    });
}

export function ApiMovieCast(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1095d1508496987a9fb37d15cac1d329`
    )
    .then(data => {
      return data.data;
    });
}
