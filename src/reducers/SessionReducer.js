const initialState = {username: '', loggedIn: false};

const SessionReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SESSION_LOGIN':
    return {
      ...state,
      username: action.payload.username,
      loggedIn: true
    };
  case 'SESSION_LOGOUT':
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
