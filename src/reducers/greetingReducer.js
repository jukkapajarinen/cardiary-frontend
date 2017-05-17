const greetingReducer = (state = {greeting: 'Hello World'}, action) => {
  switch (action.type) {
  case 'SET_GREETING':
    state = {
      ...state,
      greeting: action.payload
    };
    break;
  default:
    break;
  }
  return state;
};

export default greetingReducer;
