const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
            return;
        }
        console.log(`Data written to ${filePath}`);
    });
}

writeToFile('output.txt', 'Sample content.');
