# Cardiary-frontend

This is a React/Redux app for optimizing car driving expenses.  
Project is open-sourced and made in collaboration with @Kazooiebombchu.

## Built with:

* react
* redux
* redux-router
* react-router-bootstrap
* axios
* react-bootstrap
* bootswatch-paper
* C3 Charts

# Configuration

Cardiary React app has some configurations that need to be set in order for it to
work properly. Below is a list of all available variables that can be configured.
To configure the app make .env file to project root and copy paste all lines below
to it and edit them. By default if variable is not set it is treated as an empty
string.
```
# Cardiary rest api base url.
REACT_APP_REST_API_BASE_URL = "localhost"

# App accesible public url. Used for building the app and routing static assets.
PUBLIC_URL = "localhost"

# Rest api authorization header prefix before jwt token.
REACT_APP_AUTHORIZATION_HEADER_PREFIX = "jwt"
```
