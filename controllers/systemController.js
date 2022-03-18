const os = require('os')

const getInfo = (req, res) => {
    res.render("info", {
        argEntrada: process.argv, 
        os: process.platform, 
        nodeVs: process.version, 
        memoryUsage: os.totalmem(), 
        excPath: process.execPath, 
        processID: process.pid, 
        folder: process.cwd(),
        numCPUs: os.cpus().length
       });
};

module.exports = {
    getInfo
};