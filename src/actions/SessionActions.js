export function login(username) {
  return {
    type: 'SESSION_LOGIN',
    payload: {'username': username}
  };
}

export function logout() {
  return {
    type: 'SESSION_LOGOUT',
    payload: {'username': ''}
  };
}