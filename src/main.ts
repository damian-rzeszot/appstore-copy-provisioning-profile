import * as core from '@actions/core';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';


try {
  // Verify input

  let source = core.getInput('path');

  if (fs.existsSync(source)) {
    core.info(`Using provisioning profile at ${source}`)
  } else {
    throw new Error(`Provisioning profile file not found`);
  }


  // Create directory

  let home = os.homedir();
  core.debug(`home=${home}`);

  let directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles');
  core.debug(`directory=${directory}`);

  if (!fs.existsSync(directory)) {
    core.debug(`mkdir ${directory}`);
    fs.mkdirsSync(directory);
  }

  // Copy
  let destination = path.join(directory, path.basename(source));
  core.debug(`destination=${destination}`);

  core.debug(`copy '${source}', '${destination}'`);
  fs.copyFileSync(source, destination);

} catch (error) {
  core.setFailed(error.message);
}
