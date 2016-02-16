// import login action const
import { LOGIN_FAIL } from 'redux-base/modules/auth';

export default {
  loginForm: (state, action) => { // <------ 'loginForm' is name of form given to connectReduxForm()
    switch (action.type) {
      case LOGIN_FAIL: {
        // and let's set error message we got from server
        // submitError - property of each field that transformed to 'error'
        const actionError = action.error.data;
        const invalidFields = {};

        if (actionError && actionError.validationErrors) {

          const validationErrors = actionError.validationErrors;

          for (const fieldName of Object.keys(validationErrors)) {
            invalidFields[fieldName] = { ...state[fieldName], submitError: validationErrors[fieldName] };
          }
        }
        // replace errors for invalid fields
        // and make any other changes with field values
        return {
          ...state,
          ...invalidFields,
          rememberMe: {}        // <----- uncheck rememberMe
        };
      }
      default:
        return state;
    }
  }
};
