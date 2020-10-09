const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(`URL: ${req.url}`);
  res.send('Hello, Server!');
});

app.post('/', (req, res) => {
  console.log(`URL: vaof khoong` , req.body);
  res.sendStatus(200)
});

const server = app.listen(process.env.PORT|| 5000, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});