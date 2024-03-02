const path = require('path');

function resolvePath(relativePath) {
    const resolvedPath = path.resolve(relativePath);
    console.log(`Resolved Path: ${resolvedPath}`);
}

resolvePath('C:/Users/KIIT/Downloads/30 days node.js scalar/DAY 4/file.txt');

