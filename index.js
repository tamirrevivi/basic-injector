const config = require('./config');

const Injector = function(params){
  this.inject = function(cb){
    var signature = cb.toString().split('\n')[0];
    var arguments = config.regex.exec(signature)[1]
      .split(",")
      .map(argument => params[argument.trim()]);
    return cb.apply(this, arguments);
  }
}

module.exports = Injector
