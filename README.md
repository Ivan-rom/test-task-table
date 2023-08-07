# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Run instructions

1. At first download project and open terminal.
2. Write in terminal `npm i` to download all dependencies.

### Development mode

1. Write in terminal `npm run start`, it will start local server with database and open browser automatically.

### Production mode

1. Write in terminal `npm run build`, it will build the project in dist folder.
2. To start local server for database, write in terminal `npm run server`.
3. To open the built app, write in terminal `serve .`.

- Here you can get an error. To solve it you have to run Powershell as administrator, and run this command `Set-ExecutionPolicy Unrestricted`. Then rerun `serve .` in terminal.
