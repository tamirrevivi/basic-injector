const Injector = require('./index.js');

var injector = new Injector({
  config: {
    port: 80,
    dist: '/dist'
  },
  env: 'production'
});

injector.inject((config, env) => {
  if (!config.port === 80)
    throw new Error("Test Failed!. config port not 80")
  if (!config.dist === '/dist')
    throw new Error("Test Failed!. dist path is not /dist")
  if (!env === 'production')
    throw new Error("Test Failed!. env is not production")
  console.log("Test Passed!");
});

injector.inject((env, config) => {
  if (!config.port === 80)
    throw new Error("Test Failed!. config port not 80")
  if (!config.dist === '/dist')
    throw new Error("Test Failed!. dist path is not /dist")
  if (!env === 'production')
    throw new Error("Test Failed!. env is not production")
  console.log("Test Passed!");
});
