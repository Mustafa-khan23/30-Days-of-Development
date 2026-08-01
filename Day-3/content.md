# NPM Concepts

## 1. NPM understanding
NPM (Node Package Manager) is the default package manager for Node.js. It lets you install, update, and remove packages, manage project dependencies, and run scripts defined in `package.json`.

## 2. Installing and uninstalling packages
- `npm install <package>` adds a package to the current project.
- `npm uninstall <package>` removes a package from the project.
- `npm install -g <package>` installs a package globally, making it available from the command line.
- `npm install` without a package installs all dependencies listed in `package.json`.

## 3. Understanding `node_modules`
The `node_modules` folder is where NPM stores installed dependencies. It contains packages required by the project and nested dependency folders for any package dependencies.

## 4. Dependencies
Dependencies are packages required for the application to run in production. These are listed under `dependencies` in `package.json` and installed by default when running `npm install`.

## 5. DevDependencies
DevDependencies are packages needed only during development, such as testing tools, build tools, and linters. They are listed under `devDependencies` in `package.json` and can be installed with `npm install --save-dev`.

## 6. Scripts
NPM scripts are custom command shortcuts defined in `package.json` under the `scripts` section.
- Default scripts include lifecycle hooks like `preinstall`, `install`, `postinstall`, `pretest`, `test`, `posttest`, etc.
- Custom scripts can be defined with names like `start`, `build`, or any custom label.
- Run scripts with `npm run <script-name>`.
- NPM automatically adds `node_modules/.bin` to the `PATH` when running scripts, so installed binaries can be executed directly.
