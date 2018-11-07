const config = require('./config');

const Injector = function(params){
  var getArguments = function(cb){
    var context = context || this;
    var signature = cb.toString().split('\n')[0];
    var parsedSignature = config.regex.exec(signature);
    if (!parsedSignature){
      return [];
    }
    var arguments = parsedSignature[1]
      .split(",")
      .map(argument => params[argument.trim()]);
    return arguments;
  }

  this.inject = function(cb, context){
    var arguments = getArguments(cb);
    return cb.apply(context, arguments);
  }
  this.construct = function(ctor){
    var arguments = [null].concat(getArguments(ctor));
    return new (Function.prototype.bind.apply(ctor, arguments));
  }
  this.set = function(key, value){
    params[key] = value;
  }
}

module.exports = Injector
