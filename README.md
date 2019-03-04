# express rest api starter

Based on [`express-generator`](https://github.com/expressjs/generator)

The goal is to provide a REST API starter. Things related to client app have nothing to do here and have been removed.
This app is dedicated to expose REST endpoints only.

## environment

**Node.js** `10+` 

**npm** `6+`

## starting

```
$ npm install
$ npm test
$ npm start
```

At this point server is listening on `http://localhost:3000`.

Tests endpoints :
- `http://localhost:3000/ping`
- `http://localhost:3000/pong`

## linting rules (ESLint)

[`eslint:recommended`](https://eslint.org/docs/rules/)

[`plugin:node/recommended`](https://github.com/mysticatea/eslint-plugin-node)

## committing

### commit message convention

From [lob/generate-changelog](https://github.com/lob/generate-changelog)

Commit messages have to be in this format:

```
type(category): description
```

Where `type` is one of the following:

- `build`
- `ci`
- `chore`
- `docs`
- `feat`
- `fix`
- `other`
- `perf`
- `refactor`
- `revert`
- `style`
- `test`

And `category` can be anything of your choice. If you use a type not found in the list (but it still follows the same 
format of the message), it'll be grouped under `other`.

The commit messages are linted with [commitlint](https://conventional-changelog.github.io/commitlint/#/).

## releasing

Use one of the following commands (following [semver](http://semver.org/)) :

```
$ npm release:major
$ npm release:minor
$ npm release:patch
```

`release:<type>` command update the package version number, generate the `CHANGELOG.md` file then push to the repo.
