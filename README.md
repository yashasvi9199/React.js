# React

Stepping up in React.js with Node, Mongoose and Javascript

Few programs and notes with detailed structure of codes

# Initialising code

To create a React app with Vite, beging with ```npm create vite``` and choose project name, package name for app and Javascript.

To RUN this repository in your system:
- fork the repo and clone the repo in your system
- or download code source
- open new terminal in your editor
- run ` npm i ` or `npm install`
- run `npm run dev`

To RUN JSON SERVER
- ` npx json-server --wath $filePath --port $port` 
- we initialise port here so that it doesn't conflict with react server (3000)

# About Vite

This provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
