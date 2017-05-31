export function login(token, username) {
  return {
    type: 'SESSION_LOGIN',
    payload: {'token': token,'username': username}
  };
}

export function logout() {
  return {
    type: 'SESSION_LOGOUT'
  };
}

export function tokenLogin() {
  return {
    type: 'SESSION_TOKEN_LOGIN'
  };
}