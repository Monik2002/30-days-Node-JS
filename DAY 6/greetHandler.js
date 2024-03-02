function greetHandler(req, res) {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}!`);
}

module.exports = greetHandler;
