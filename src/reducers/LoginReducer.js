const initialState = {username: "", password: "", loggedIn: false};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        loggedIn: action.payload.loggedIn
      }
      break;
    case "LOGOUT":
      state = {
        ...state,
        username: "",
        password: "",
        loggedIn: false
      }
      break;
    default:
      break;
  }
  return state;
};

export default LoginReducer;
