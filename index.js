const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function greet(name) {
  return `Hello, ${name}`;
}

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  const message = greet(name);
  res.send(`<h1>${message}</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
