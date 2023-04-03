import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  ADD_MOVIE_BEGIN,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  DELETE_MOVIE,
} from "../reducers/moviesReducer";

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: { id },
  };
};

export const addMovieBegin = () => {
  return {
    type: ADD_MOVIE_BEGIN,
  };
};
export const addMovieSuccess = (movie) => {
  return {
    type: ADD_MOVIE_SUCCESS,
    payload: { movie },
  };
};

export const addMovieFailure = (error) => {
  return {
    type: ADD_MOVIE_FAILURE,
    payload: { error },
  };
};

// api actions
export function fetchMovies() {
  return (dispatch) => {
    dispatch(fetchMoviesBegin());
    return fetch("http://localhost:3004/movies")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchMoviesSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchMoviesFailure(error)));
  };
}

export function addMovie(movie) {
  return (dispatch) => {
    dispatch(addMovieBegin());
    return fetch("http://localhost:3004/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addMovieSuccess(data));
        return data;
      })
      .catch((error) => dispatch(addMovieFailure(error)));
  };
}
