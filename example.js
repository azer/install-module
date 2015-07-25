var install = require('./');

install(['right-pad'], { save: true }, function (error) {
  if (error) throw error;
});

install(['anglicize', 'title-from-url'], { saveDev: true }, function (error) {
  if (error) throw error;
});
