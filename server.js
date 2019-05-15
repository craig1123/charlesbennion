const express = require('express');
const path = require('path');
const app = express();

const port = 4040;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
