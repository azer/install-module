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

With options:

```js
var install = require('install-module')

install(['browserify', 'reactify'], { saveDev: true }, function (error) {
  if (error) throw error;
});
```
