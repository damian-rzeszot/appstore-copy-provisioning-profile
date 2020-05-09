"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
try {
    // Verify input
    let source = core.getInput('path');
    if (fs.existsSync(source)) {
        core.info(`Using provisioning profile at ${source}`);
    }
    else {
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
}
catch (error) {
    core.setFailed(error.message);
}
