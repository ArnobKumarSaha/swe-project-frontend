# FrontEnd for Project Manager repo , created with VueJS

This project listens on port 8080, http://localhost:8080/. Internaly it passes the requests to backend API, which will be listening on http://localhost:3000/.  The backend project link is https://github.com/ArnobKumarSaha/swe-project. 

## Install NodeJS
If you don't have nodeJS installed yet, you can do this easily by follwing this commads one by one (for Linux Machine): 

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

`source $HOME/.bashrc`

`nvm install 16.13.0`

nodeJS version >= v16.13.0 is required

For Other Operating systems , follow this link https://nodejs.org/en/download/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

build & lint commands are not required to see this project live.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).