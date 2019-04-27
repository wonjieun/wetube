const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function home(req, res) {
  console.log(req);
  res.send('Hello from Home');
}

function profile(req, res) {
  console.log('profile');
  res.send('Hello from Profile');
}

app.get('/', home);
app.get('/profile', profile);

app.listen(PORT, handleListening);
