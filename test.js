var install = require("./");
var exec = require("child_process").exec;
var test = require("prova");
var fs = require("fs");
var exists = fs.existsSync;
var wd = '/tmp/install-module-test';

test('with options', function (t) {
  t.plan(6);

  reset(function (error) {
    t.error(error);

    install(['format-text', 'go', 'comma-list'], { save: true, cp: { cwd: wd } }, function (error) {
      t.error(error);
      t.ok(exists(wd + '/node_modules/format-text'));
      t.ok(exists(wd + '/node_modules/go'));
      t.ok(exists(wd + '/node_modules/comma-list'));
      t.deepEqual(Object.keys(require(wd + '/package').dependencies), ['comma-list', 'format-text', 'go', 'local-debug']);
    });
  });
});

function reset (callback) {
  exec('rm -rf ' + wd, function (error) {
    if (error) return callback(error);

    exec('mkdir ' + wd, function (error) {
      if (error) return callback(error);

      fs.writeFile(wd + '/package.json', JSON.stringify(require('./package')), callback);
    });
  });
}
