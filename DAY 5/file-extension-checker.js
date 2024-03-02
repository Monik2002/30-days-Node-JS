const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    let fileExtension = path.extname(filePath);
    if (fileExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`);
    }
}

checkFileExtension('./file1.txt', '.txt');
checkFileExtension('./image.png', '.jpg');