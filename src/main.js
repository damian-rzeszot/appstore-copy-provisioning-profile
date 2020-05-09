const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('path');
  console.log(`Hello ${nameToGreet}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

} catch (error) {
  core.setFailed(error.message);
}
