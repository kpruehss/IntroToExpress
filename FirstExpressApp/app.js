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

// Pattern route (use : to designate a variable in the route)
app.get('/r/:subredditName', (req, res) => {
  const subreddit = req.params.subredditName;

  res.send(`Welcome to the ${subreddit.toUpperCase()} subreddit`);
});

// Catchall route (ex: 404 page)
app.get('*', (req, res) => {
  res.send('YOU ARE A STAR');
});

// Tell Express to listen for requests (start server)
app.listen(3000, () => {
  console.log('Server has started!');
});
