# Injector.js
Injector.js is a javascript module that allows you to call your functions without sending them their arguments.
The Injector class allows you to set a parameter dictionary, so that when you call your function using inject, the appropriate parameter wiil be passed according to the parameter names in the function signature.

## Example
```bash
$ npm install injector-js
```

```js
const Injector = require('injector-js');

var injector = new Injector({
  config: require('./config'),
  env: 'production',
  utils: require('./utils')
});

injector.inject((utils, config, env) => {
  console.log(env) // production
});
```
