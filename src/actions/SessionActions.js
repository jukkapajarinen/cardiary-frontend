export function login(token) {
  return {
    type: 'SESSION_LOGIN',
    payload: {'token': token}
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