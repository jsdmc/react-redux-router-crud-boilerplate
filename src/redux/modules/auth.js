import axios from 'axios';

//--------------------------- Action constants --------------------------

// names for actions can be more specific
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//--------------------------- Reducer function --------------------------

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
    case LOGIN_REQUEST:
      return Object.assign({}, state, {loggingIn: true});
      
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggingIn: false, user: action.user, role: action.role});
    
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        user: null,
        role: null,
        loginError: action.error
      };
    case LOGOUT_REQUEST:
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
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

//--------------------------- Action functions --------------------------

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user: user
  };
}

function loginSuccess(user, data) {
  return {
    type: LOGIN_SUCCESS,
    user: data.user,
    role: data.role
  };
}

function loginFailure(user, error) {
  return {
    type: LOGIN_FAILURE,
    user: user,
    error: error
  };
}

export function login(user, password) {
  return (dispatch) => {
    
    dispatch(loginRequest(user));

    return axios
      .post('http://localhost:3001/api/login', { user: user, password: password })
      .then(response => dispatch(loginSuccess(user, response.data)))
      .catch(function (error){
        const response=error.response;
        if(response===undefined){
          dispatch(loginFailure(user, error));
        }else{
          error.status = response.status;
          error.statusText = response.statusText;     
          error.message = response.message;     
          dispatch(loginFailure(user, error));
        }
      });
  };
}

function logoutRequest(user) {
  return {
    type: LOGOUT_REQUEST,
    user
  };
}

function logoutSuccess(user) {
  return {
    type: LOGOUT_SUCCESS,
    user
  };
}

function logoutFailure(user, error) {
  return {
    type: LOGOUT_FAILURE,
    user,
    error
  };
}

export function logout(user) {
  return dispatch => {
    
    dispatch(logoutRequest(user));

    return axios.post('http://localhost:3001/api/logout', { user: user })
      .then(response => dispatch(logoutSuccess(response.data)))
      .catch(function (error){
        const response=error.response;
        if(response===undefined){
          dispatch(logoutFailure(user, error));
        }else{
          error.status = response.status;
          error.statusText = response.statusText;     
          error.message = response.message;      
          dispatch(logout(user, error));
        }
      });
  };
}