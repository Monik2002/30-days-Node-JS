const express = require("express");
const positiveIntegerHandler = require("./positiveIntegerHandler");
const errorHandler = require("./errorHandler");

const app = express();

app.get("/positive", positiveIntegerHandler);

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// localhost:3000/positive?number=5
// localhost:3000/positive?number=-5
// localhost:3000/positive?number=5.5
// localhost:3000/positive?number=hello
// localhost:3000/positive?number=0