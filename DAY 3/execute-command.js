const { exec } = require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(`Command Output:\n${stdout}`);
    });
}
// executeCommand('ls -la');
executeCommand('dir');
executeCommand('echo "Hello, Node.js!"');
