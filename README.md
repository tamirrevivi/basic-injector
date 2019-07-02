# BasicInjector
BasicInjector is a javascript module that allows you to call your functions without sending them their arguments.
The Injector class allows you to set a parameter dictionary, so that when you call your function using inject, the appropriate parameter wiil be passed according to the parameter names in the function signature.

## Basic Usage
Use injector to inject parameters to function

```bash
$ npm install basic-injector
```

```js
const Injector = require('basic-injector');

var injector = new Injector({
  config: require('./config'),
  env: 'production',
  utils: require('./utils')
});

injector.inject((utils, config, env) => {
  console.log(env) // production
});
```

## Adding parameters
Add more parameters to inject

```js
injector.set("port", 8080);
```

## Removing parameters
Remove parameters to inject

```js
injector.remove("port");
```

## Set thisArg
Set the fucntions this

```js
var obj = {};

injector.inject(function(port){
  this.port = port;
}, obj);

console.log(obj) // { port: 8080 }
```

## Use function as constructor
Run the function with the new keyword to create an instance of it

```js
var Example = function(port){
  this.port = port;
}

var example = injector.construct(Exapmle);

console.log(example) // Example { port: 8080 }
```
