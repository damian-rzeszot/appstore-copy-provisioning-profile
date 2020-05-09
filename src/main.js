const core = require('@actions/core');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');

try {
  // Verify input

  const source = core.getInput('path');

  if (fs.existsSync(source)) {
    core.info(`Using provisioning profile at ${source}`)
  } else {
    throw `Provisioning profile file not found`;
  }


  // Create directory

  const home = os.homedir();
  core.debug(`home=${home}`);

  const directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles');
  core.debug(`directory=${directory}`);

  if (!fs.existsSync(directory)) {
    core.debug(`mkdir ${directory}`);
    fs.mkdirsSync(directory);
  }


  // Copy
  const destination = path.join(directory, path.basename(source));
  core.debug(`destination=${destination}`);

  core.debug(`copy '${source}', '${destination}'`);
  fs.copyFileSync(source, destination);

} catch (error) {
  core.setFailed(error.message);
}
