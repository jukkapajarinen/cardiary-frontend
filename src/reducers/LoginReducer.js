const initialState = {username: '', loggedIn: false};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      username: action.payload.username,
      loggedIn: true
    };
  case 'LOGOUT':
    return {
      ...state,
      username: '',
      loggedIn: false
    };
  default:
    return state;
  }
};

export default LoginReducer;
