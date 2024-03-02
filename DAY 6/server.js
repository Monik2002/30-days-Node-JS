const express = require('express');
const greetHandler = require('./greetHandler');

const app = express();

app.get('/greet', greetHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
