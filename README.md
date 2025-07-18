# Express and Node.js Template + TypeScript

## Getting Started

- Clone the repo using `$ git clone` or use degit to remove git reference and generate your own git repo if needed, e.g.:

```bash
npx degit your-username/nodejs-ts-template new-project-name
```

- Then cd into the project and start coding! You can use the dependencies available in package.json or create a new one based on your node version.

```bash
mkdir nodejs-ts-template
cd nodejs-ts-template
npm install
```

### Files & Folder Structure

- There are sub-folders in the `src` folder namely: controllers, middlewares, models, routes, types & utils. Inside each folder is a `.gitkeep` file to preserve the folder when pushing to Github when the folder is empty. When you want to code in them, delete the `.gitkeep` file and add relevant files then push to Github.

### Manual installation of dependencies:

- Delete the existing package.json and pakcage-lock.json files and create a new package.json file, `$ npm init -y` and run these commands:

```bash
npm install express
npm install -D typescript ts-node-dev @types/node @types/express eslint @eslint/js typescript-eslint prettier eslint-config-prettier nodemon
```

- Generate `tsconfig.json`:

```bash
npx tsc --init
```

- A typical `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

- Create `.gitignore` file and add:

```
node_modules
dist
.env
```

---

## Scripts

Add these scripts to your `package.json`:

```json
"scripts": {
  "dev": "nodemon",
  "build": "tsc",
  "start": "node dist/index.js",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write .",
}
```

---

## ESLint Setup

- ESLint is configured via `eslint.config.js` using the new flat config system.
- To run linting:

```bash
npm run lint
```

- To fix auto-fixable lint errors:

```bash
npx eslint . --ext .ts --fix
```

---

## Nodemon Setup

- Nodemon watches for file changes and restarts your server automatically.
- Configuration is in `nodemon.json` file.
- To run with nodemon:

```bash
npm run dev
```

---

## Prettier Setup

- Prettier is configured with `.prettierrc` and `.prettierignore`.
- To format your code manually:

```bash
npm run format
```

- Consider configuring your editor to format on save.

---

## Additional Notes

- **Environment variables:** Create a `.env` file in the root for environment variables and update .gitignore to include .env(don't commit this file).

```gitignore
.env
```

- **Debugging:** You can add a `.vscode/launch.json` for easy debugging in VS Code.
- **Type Safety:** All code is written in TypeScript with strict type checking enabled.
- **Build:** Run `npm run build` to compile TypeScript to JavaScript in the `dist` folder.

---

## Run the Project

- For development with automatic reload:

```bash
npm run dev
```

- For production build and run:

```bash
npm run build
npm start
```
