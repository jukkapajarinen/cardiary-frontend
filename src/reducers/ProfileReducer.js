const initialState = {
  username: 'anonymous',
  email: 'example@example.com'
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'PROFILE_UPDATE_DATA':
    return {
      ...state,
      username: action.payload.username,
      email: action.payload.email
    };
  default:
    return state;
  }
};

export default ProfileReducer;