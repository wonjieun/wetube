// const express = require('express');
import express from 'express';
const app = express();

const PORT = 4000;

/* function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
} */
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

/* function home(req, res) {
  console.log(req);
  res.send('Hello from Home');
} */
const home = (req, res) => res.send('Hello my boot');

/* function profile(req, res) {
  console.log('profile');
  res.send('Hello from Profile');
} */
const profile = (req, res) => res.send('Hello from Profile');

app.get('/', home);
app.get('/profile', profile);

app.listen(PORT, handleListening);
