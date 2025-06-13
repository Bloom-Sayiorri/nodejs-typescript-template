# Express and Nodejs Template + Typescript

-   Clone the repo using `$ git clone`or use degit to remove git reference and generate your own if needed, ie:
    `npx degit your-username/express-ts-app new-project-name`

-   Then cd into the project and start coding!

```
$ mkdir express-ts-app
$ cd express-ts-app
$ npm init -y
```

-   Then install dependencies:

```
$ npm install express
$ npm install -D typescript ts-node-dev @types/node@types/express
```

-   Generate a tsconfig file:

```
$ npx tsc --init
```

-   The file will look something like this:

```
json
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

-   Next you need to add the following file to a .gitignore file after creating one:

```
node_modules
dist
.env
```

-   Upgrade you README.md to contain:

```
json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

-   Finally run the project using this command: `$ npm run dev`
