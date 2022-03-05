const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error text
        if (err) {
            reject(err);
            // return out of the function here to make sure the promise doesn't continue
            return;
        }

        // if everything went well, resolve the promise and send the success message
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
});
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          console.log(err);
          return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
    });
};

module.exports = { writeFile, copyFile };