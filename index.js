import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const home = (req, res) => res.send('Hello my home');

const profile = (req, res) => res.send('Hello from Profile');

/*
 * 미들웨어 위치 중요!
 */
app.use(helmet()); // 보안을 위한 미들웨어
app.use(logger('dev')); // 로깅을 위한 미들웨어

// response를 가로챌 수 있음!
const middleware = (req, res, next) => {
  res.send('not happening ... Interrupted');
};

// 미들웨어들 선언 ...

app.get('/', middleware, home);

app.get('/profile', profile);

app.listen(PORT, handleListening);
