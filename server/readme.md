# Get Started Server
0. Create **config.json** to the ./server/etc dir

1. run to console
```alias
cd server
```
to go to the server directory

2. run to console in **./server** dir
```alias
yarn
```
to instal dependencies

3. run to console in **./server** dir
```alias
yarn build
```
to building application files

4. run to console in **./server** dir
```alias
yarn start
```
to start application

## Run to localhost

**Update app.js:**
1. To comment

```JavaScript
https.createServer(options, app).listen(serverPort, function() {
  console.log(`Express server listening on port ${serverPort}`);
});
```

```JavaScript
const options = {
  key: fs.readFileSync(path.join(__dirname, './path/to/private.key', 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, './path/to/certificate.srt', 'certificate.srt')),
};
```

2. Uncomment

```JavaScript
// import http from 'http';
```

```JavaScript
// http.createServer(app).listen(serverPort, function() {
//   console.log(`Express server listening on port ${serverPort}`);
// });
```