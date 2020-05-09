const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');
const os = require('os');

try {
  // Verify Input

  const path = core.getInput('path');

  if (!fs.existsSync(path)) {
    throw `Provisioning profile file not found`;
  }

  // Create Provisioning Profiles Directory
  const home = os.homedir();
  const directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles')

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
