const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  rentals: 660,
  customers: 660,
  users: 660
})

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log('rent-a-movie server is running');
})