export function login(username) {
  return {
    type: 'LOGIN',
    payload: {'username': username}
  };
}

export function logout(username) {
  return {
    type: 'LOGOUT',
    payload: {'username': username}
  };
}