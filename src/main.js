const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');
const os = require('os');

try {
  // Verify Input

  const path = core.getInput('path');

  if (fs.existsSync(path)) {
    core.info(`Using provisioning profile at ${path}`)
  } else {
    throw `Provisioning profile file not found`;
  }

  // Create Provisioning Profiles Directory
  const home = os.homedir();
  core.debug(`home=${home}`);

  const directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles');
  core.debug(`directory=${directory}`);

  if (!fs.exists(directory)) {
    fs.mkdir(directory, (error) => {
      if (err) {
        throw err;
      }
    });
  }

} catch (error) {
  core.setFailed(error.message);
}
