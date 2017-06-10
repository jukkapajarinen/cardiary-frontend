const initialState = {
  loggedIn: false
};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SESSION_LOGIN':
    localStorage.setItem('jwt_token', action.payload.token);
    return {
      ...state,
      loggedIn: true
    };
  case 'SESSION_LOGOUT':
    localStorage.removeItem('jwt_token');
    return {
      ...state,
      loggedIn: false
    };
  case 'SESSION_TOKEN_LOGIN':
    return {
      ...state,
      loggedIn: true
    };
  default:
    return state;
  }
};

export default SessionReducer;
