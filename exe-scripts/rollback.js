const { exec, execSync } = require("child_process");
console.log(process.argv);

const offset = parseInt(process.argv[2]);

exec("bundle exec rake db:rollback STEP=" + (offset || 1), (err, stdout, stderr) => {
  [stdout, stderr].forEach((output) => { console.log(output) });
  if (err !== null) console.log(`exec error: ${err}`);
});
