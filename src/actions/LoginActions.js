export login = (username, password, loggedIn) => {
  return {
    type: "LOGIN",
    payload: {
      "username": username,
      "password": password,
      "loggedIn": loggedIn
    }
  }
};

export logout = (username) => {
  return {
    type: "LOGOUT",
    payload: {"username": username}
  }
};