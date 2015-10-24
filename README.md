## install-module

Install an NPM module

## Install

```bash
$ npm install install-module
```

## Usage

A simple usage:

```js
var install = require('install-module')

install('browserify', function (error) {
  if (error) throw error;
});
```

Available options:

* **save:** Save as dependency
* **saveDev:** Save as development dependency
* **cp:** Child process options that'll be passed to exec call.

```js
var install = require('install-module')

install(['browserify', 'reactify'], { saveDev: true }, function (error) {
  if (error) throw error;
});
```

See `test.js` for more info.
