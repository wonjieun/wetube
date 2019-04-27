import express from 'express';
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const home = (req, res) => res.send('Hello my home');

const profile = (req, res) => res.send('Hello from Profile');

const middleware = (req, res, next) => {
  console.log('middleware');
  next();
};

/*
 * 미들웨어 위치 중요!
 */
app.use(middleware);

// 미들웨어들...

app.get('/', home);

app.get('/profile', profile);

app.listen(PORT, handleListening);
