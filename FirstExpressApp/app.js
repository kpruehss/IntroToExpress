const express = require('express');
const app = express();

// "/" => "Hi There!"
app.get('/', (req, res) => {
  res.send('Hi There!');
});

// "/bye" => "Goodbuy!"
app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});
// "/cat" => "Meow!"
app.get('/cat', (req, res) => {
  res.send('MEOW!');
});

// Tell Express to listen for requests (start server)
app.listen(3000, () => {
  console.log('Server has started!');
});
