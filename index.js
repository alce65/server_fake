// import js from "json-server";
// const server = js.create();
// const middlewares = js.defaults();
// const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

// server.use(middlewares);
// server.use(js.router("db.json"));

// server.listen(port);

import jsv from 'json-server';

const port = process.env.PORT || 5600;
const server = jsv.create();
const middlewares = jsv.defaults();

server.use(middlewares);
server.use(jsv.router('db.json'));

server.listen(port, () => console.log('JSON Server is running in port', port));
