export function login(username, password) {
  return {
    type: 'LOGIN',
    payload: {
      'username': username,
      'password': password
    }
  };
}

export function logout(username) {
  return {
    type: 'LOGOUT',
    payload: {
      'username': username
    }
  };
}