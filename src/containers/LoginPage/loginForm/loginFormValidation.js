function checkEmail(value) {
  return /\S+@\S+\.\S+/i.test(value);
}

export default function validateLoginForm(data) {
  const errors = { };

  if (!data.userName) {
    errors.userName = 'Required login';
  } else if (!checkEmail(data.userName)) {
    errors.userName = 'Invalid email address';
  }

  if (!data.password) {
    errors.password = 'Password required';
  } else if (data.password.length < 5) {
    errors.password = 'Must be more than 5 characters';
  }

  // just for demonstration
  if (!data.rememberMe) {
    errors.rememberMe = 'Required option';
  }

  return errors;
}
