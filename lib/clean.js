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
    let home = os.homedir();
    core.debug(`home=${home}`);
    const directory = path.join(home, 'Library', 'MobileDevice', 'Provisioning Profiles');
    core.debug(`directory=${directory}`);
    // Delete directory
    fs.removeSync(directory);
    core.debug(`remove '${directory}'`);
}
catch (error) {
    core.setFailed(error.message);
}
