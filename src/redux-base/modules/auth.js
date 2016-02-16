import axios from 'axios';

// --------------------------- Action constants --------------------------

// names for actions can be more specific
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// if other components need to react to some action of current module - export corresponding action type
export const LOGIN_FAIL = 'LOGIN_FAIL';

const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';

// --------------------------- Reducer function --------------------------

const initialState = {
  // user: null,
  // password: null,
  // userRole: null,
  // loggingIn: false,
  // loggingOut: false,
  // loginError: null,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result.data,
        role: action.result.data.role
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        role: null,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null,
        userRole: null,
        loginError: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

// --------------------------- Action functions --------------------------

export function login(userName, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: axios
      .post('http://localhost:3001/api/login', { userName, password })
  };
}

export function logout(userName) {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: axios
      .post('http://localhost:3001/api/logout', { userName })
  };
}
