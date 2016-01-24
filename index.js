var debug = require("local-debug")('install-module');
var exec = require("child_process").exec;

module.exports = install;

function install (name, options, callback) {
  if (Array.isArray(name)) name = name.join(' ');
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var cmd = 'npm install --silent ';

  if (options.save) cmd += '--save ';
  if (options.saveDev) cmd += '--save-dev ';
  if (options.global) cmd += '-g ';

  cmd += name;

  debug(cmd, options);
  exec(cmd, options.cp, function (error, stdout, stderr) {
    callback(error);
  });
}
