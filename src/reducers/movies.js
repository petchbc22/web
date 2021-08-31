import { CREATE_MOVIE, DELETE_MOVIE, RETRIEVE_MOVIE } from "../actions/types";

const initialState = [];

const movieReducer = (movies = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MOVIE:
      return [...movies, payload];

    case RETRIEVE_MOVIE:
      return payload;

    //   case UPDATE_TUTORIAL:
    //     return tutorials.map((tutorial) => {
    //       if (tutorial.id === payload.id) {
    //         return {
    //           ...tutorial,
    //           ...payload,
    //         };
    //       } else {
    //         return tutorial;
    //       }
    //     });

    case DELETE_MOVIE:
      return movies.filter(({ movieId }) => movieId !== payload.movieId);

    //   case DELETE_ALL_TUTORIALS:
    //     return [];

    default:
      return movies;
  }
};

export default movieReducer;
