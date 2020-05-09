const core = require('@actions/core');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');

try {
  const home = os.homedir();
  core.debug(`home=${home}`);

  const directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles');
  core.debug(`directory=${directory}`);


  // Delete directory

  fs.removeSync(directory);
  core.debug(`remove '${directory}'`);

} catch (error) {
  core.setFailed(error.message);
}
