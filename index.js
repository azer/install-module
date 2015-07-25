var exec = require("child_process").exec;

module.exports = install;

function install (name, options, callback) {
  if (Array.isArray(name)) name = name.join(' ');
  if (typeof options == 'function') callback = options;

  var cmd = 'npm install ';

  if (options.save) cmd += '--save ';
  if (options.saveDev) cmd += '--save-dev ';

  cmd += name;

  exec(cmd, function (error) {
    callback(error);
  });
}
