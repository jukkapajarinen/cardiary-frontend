export function updateData(username, email) {
  return {
    type: 'PROFILE_UPDATE_DATA',
    payload: {
      'username': username,
      'email': email
    }
  };
}