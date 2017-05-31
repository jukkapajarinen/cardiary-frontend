const initialState = {
  username: '',
  loggedIn: false
};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SESSION_LOGIN':
    localStorage.setItem('jwt_token', action.payload.token);
    return {
      ...state,
      username: action.payload.username,
      loggedIn: true
    };
  case 'SESSION_LOGOUT':
    localStorage.removeItem('jwt_token');
    return {
      ...state,
      username: '',
      loggedIn: false
    };
  default:
    return state;
  }
};

export default SessionReducer;
