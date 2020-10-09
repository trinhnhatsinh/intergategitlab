const express = require('express');
const port = 3000;
const app = express();

app.get('/', (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send('Hello, Server!');
});

const server = app.listen(port|| 5000, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});