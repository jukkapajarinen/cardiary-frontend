export function login(token, username) {
  return {
    type: 'SESSION_LOGIN',
    payload: {
      'token': token,
      'username': username
    }
  };
}

export function logout() {
  return {
    type: 'SESSION_LOGOUT',
    payload: {'username': ''}
  };
}