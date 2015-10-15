import axios from 'axios';

// --------------------------- Action constants --------------------------
const LOAD = 'movies/LOAD';
const LOAD_SUCCESS = 'movies/LOAD_SUCCESS';
const LOAD_FAIL = 'movies/LOAD_FAIL';

// --------------------------- Reducer function --------------------------
const initialState = {
  loaded: false,
  loading: true,
  data: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error.data
      };
    default:
      return state;
  }
}

// --------------------------- Action functions --------------------------
export function isLoaded(globalState) {
  return globalState.movies && globalState.movies.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: axios.get('http://localhost:3001/api/movies')
  };
}
