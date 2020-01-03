import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicAuth from 'express-basic-auth';

import * as db from './utils/DataBaseUtils';
import fs from 'fs';
import https from 'https';
// import http from 'http';
import path from 'path';

import { user } from '../etc/config.json';
import { serverPort } from '../etc/config.json';

const options = {
  key: fs.readFileSync(path.join(__dirname, './path/to/private.key', 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, './path/to/certificate.srt', 'certificate.srt')),
};

const app = express();

db.setUpConnection();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.use(
    basicAuth({
      users: user,
    }),
);

app.get('/users', (req, res) => {
  db.listUsers(req.query.page).then((data) => res.send(data));
});

app.post('/user', (req, res) => {
  db.createUser(req.body).then((data) => res.send(data));
});

app.get('/images', (req, res) => {
  db.listImages(req.query.page).then((data) => res.send(data));
});

app.post('/images', (req, res) => {
  db.createImage(req.body).then((data) => res.send(data));
});

https.createServer(options, app).listen(serverPort, function() {
  console.log(`Express server listening on port ${serverPort}`);
});

// http.createServer(app).listen(serverPort, function() {
//   console.log(`Express server listening on port ${serverPort}`);
// });
