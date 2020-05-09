import * as core from '@actions/core';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as os from 'os';

try {
  let home = os.homedir();
  core.debug(`home=${home}`);

  const directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles');
  core.debug(`directory=${directory}`);


  // Delete directory

  fs.removeSync(directory);
  core.debug(`remove '${directory}'`);

} catch (error) {
  core.setFailed(error.message);
}
