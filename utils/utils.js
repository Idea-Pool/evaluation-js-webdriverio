const fsLibrary = require('fs');

class Utils {

    writeToFile(source, dest) {
        fsLibrary.writeFile(dest, source, (error) => {
            if (error) throw err;
        });
    }
}

module.exports = new Utils();