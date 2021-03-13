# Test Case 02

## Steps

- Launch the program and understand what it supposed to do
- Find and fix the problem
- Run the tests
- Fix test
- Find on witch data the code fails
- Write test to reproduce the problem and fix the code
- What other tests you could add to make the code more robust ?
- How can you improve the readability ?
- What could be done to improve the code further ?

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.


*based on 🧰 Simple TypeScript Starter | 2020*  
*https://khalilstemmler.com/blogs/typescript/node-starter-project/*  
*https://github.com/stemmlerjs/simple-typescript-starter*  

> We talk about a lot of **advanced Node.js and TypeScript** concepts on [the blog](https://khalilstemmler.com), particularly focused around Domain-Driven Design and large-scale enterprise application patterns. However, I received a few emails from readers that were interested in seeing what a basic TypeScript starter project looks like. So I've put together just that.

### Features

- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon
