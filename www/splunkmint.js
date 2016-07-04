var argscheck = require('cordova/argscheck'), exec = require('cordova/exec');

module.exports = {
  start : function(successCallback, errorCallback, apiKey, extraData) {
    cordova.exec(successCallback, errorCallback, 'SplunkMint', 'start', [apiKey, extraData]);
  },
  crash : function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'SplunkMint', 'crash', []);
  }
}
