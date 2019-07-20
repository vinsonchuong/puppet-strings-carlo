# puppet-strings-carlo
![npm](https://img.shields.io/npm/v/puppet-strings-carlo.svg)
[![Build Status](https://travis-ci.org/vinsonchuong/puppet-strings-carlo.svg?branch=master)](https://travis-ci.org/vinsonchuong/puppet-strings-carlo)
[![dependencies Status](https://david-dm.org/vinsonchuong/puppet-strings-carlo/status.svg)](https://david-dm.org/vinsonchuong/puppet-strings-carlo)
[![devDependencies Status](https://david-dm.org/vinsonchuong/puppet-strings-carlo/dev-status.svg)](https://david-dm.org/vinsonchuong/puppet-strings-carlo?type=dev)

Automate Carlo apps with
[puppet-strings](https://github.com/vinsonchuong/puppet-strings)

## Example
```js
const app = await carlo.launch(})
app.serveOrigin('http://example.com')
app.load('http://example.com')

const tab = await openCarlo(app)
const body = await findElement(tab, 'body')
t.true(body.innerText.includes('Example Domain'))
```

## Installation
Install [puppet-strings-carlo](https://yarnpkg.com/en/package/puppet-strings-carlo)
by running:

```sh
yarn add puppet-strings-carlo
```
