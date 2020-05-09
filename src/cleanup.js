const core = require('@actions/core');
const github = require('@actions/github');

try {
  const time = (new Date()).toTimeString();
  core.setOutput("test", time);
} catch (error) {
  core.setFailed(error.message);
}
