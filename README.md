<p align="center">
<img src="https://cdn.auth0.com/blog/es6rundown/logo.png">
</p>

![es](https://img.shields.io/badge/es-6-green.svg?longCache=true&style=flat-square) ![babel](https://img.shields.io/badge/babel-preset--2015-orange.svg?longCache=true&style=flat-square) ![jest](https://img.shields.io/badge/tests-jest-blue.svg?longCache=true&style=flat-square) ![lint](https://img.shields.io/badge/lint-eslint+prettier-red.svg?longCache=true&style=flat-square) ![live](https://img.shields.io/badge/live-wallaby.js-lightgrey.svg?longCache=true&style=flat-square) ![hook](https://img.shields.io/badge/git-husky-yellow.svg?longCache=true&style=flat-square)

----------------------------------
# es6-starter-template 

Simple starter **ES6** template for JS applications development.

## Configured modules

This template contains the following configured modules for easily work.

* [Babel](https://babeljs.io/) (with es2015 preset)
* [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
* [Husky](https://github.com/typicode/husky) (with pre-commit hook)
* [Jest](https://facebook.github.io/jest/)


## Install 

Clone the repo:
```sh
$ git clone https://github.com/liashchynskyi/es6-starter-template [your_project_name]
```
Install dependencies:
```sh
$ cd [your_project_name] && npm install
```

Test it:
```sh
$ npm run test
```

## Example script

All the scripts are placed in **_src_** directory. The test scripts are placed in **__tests__** directory.

**Simple source file**
```javascript
//Example script

export function Got() {
  return 'Got';
}

export default function() {
  return 'Hello World';
}

export async function fetchJson(url) {
  try {
    let request = await fetch(url);
    let text = await request.text();
    return JSON.parse(text);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

```
**Simple test file**
```javascript
import idx, {Got} from '../src/index';

const resp = idx();

describe('test', () => {
  it('should export Got function', () => {
    expect(Got).toBeInstanceOf(Function);
  });

  it('should return hello world', () => {
    expect(resp).toEqual('Hello World');
  });
});

```

![Jest](https://i.imgur.com/II4wN67.jpg)

## Wallaby.js

If you want to observe your tests in live this repo also contains **wallaby.js** settings file for doing this thing. Before using this feature you may need to install wallaby extension for your favourite IDE. How to do that is described [here](https://wallabyjs.com/download/).


## License

MIT &copy; [Petro Liashchynskyi](https://github.com/liashchynskyi)
