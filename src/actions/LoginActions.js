export function LoginAction(username) {
  return {
    type: 'LOGIN',
    payload: {'username': username}
  };
}

export function LogoutAction() {
  return {
    type: 'LOGOUT',
    payload: {'username': ''}
  };
}