const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser);

app.get('/', (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send('Hello, Server!');
});

app.post('/', (request, response) => {
  console.log(`URL: vaof khoong` , request.body);
  response.sendStatus(200)
});

const server = app.listen(process.env.PORT|| 5000, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});