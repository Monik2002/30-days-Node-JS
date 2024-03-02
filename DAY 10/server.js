const express = require('express');
const path = require('path');

  const app = express();

  app.use(express.static('public')); // this line is used to serve the static files present in the public folder of the directory.This setup is commonly used to serve static assets such as HTML, CSS, JavaScript, images, and other files that don't require server-side processing. Placing static files in a dedicated directory like public helps organize the project structure and makes it easier to manage and serve static assets.

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
  });

   app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' , 'styles' , 'style.css'));
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

// http://localhost:3000
// http://localhost:3000/styles

// path.join is used to join the path of the current directory with the path of the file we want to send. 

