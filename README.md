# sample-project-to-do-list

A simple to-do list application for demonstrating Vue 3 + TypeScript.

This is step 1. We'll go over project setup and the anatomy of a new Vue project.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Now you're running this project live in your development environment!

## Anatomy of a Vue Project

Let's go over the directory structure and files that showed up.

- **node_modules**: This directory was created when you ran `npm install`. Think of it like your .m2/repository if you're familiar with Maven.
- **public**: This directory will contain any public assets useful outside Vue. I.E. favicon.ico
- **src**: This directory will contain all of our .vue, .ts, .js source code.
  - **assets**: This directory will contain any non-code assets useful to the Vue application.
  - **components**: This directory will contain any common components.
  - **router**: This directory will contain any code relevant to application routing.
  - **stores**: This directory will contain any store modules for tracking different state groupings.
  - **views**: This directory will contain any views we create. For a generic site, think "Home", "About", etc.
  - **App.vue**: This template contains any elements common to the entire application.
  - **main.ts**: This script is responsible for initializing the Vue application.
- **.eslintrc.cjs**: This file contains the ESLint configuration for the project. ESLint is a linter that helps enforce code style and best practices.
- **.gitignore**: This file contains a list of files and directories that should be ignored by Git.
- **.prettierrc.json**: This file contains the Prettier configuration for the project. Prettier is a code formatter that helps enforce code style.
- **index.html**: This file is the browser entry point for the Vue application.
- **package.json**: This file contains the project metadata and dependencies interpreted by npm.
- **package-lock.json**: This file contains the exact dependency tree installed by npm.
- **README.md**: This file contains the project documentation.
- **tsconfig.*.json**: This file contains the TypeScript configuration for the project. TypeScript is a superset of JavaScript that adds static types.
- **vite.config.ts**: This file contains the Vite configuration for the project. Vite is a build tool that focuses on speed and simplicity.
- 