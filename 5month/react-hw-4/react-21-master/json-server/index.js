const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post('/login', (req, res) => {
  try {
    const {username, password} = req.body;

    console.log(username, password)

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const {users = []} = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json({data: userFromBd, token: 'Bearer blablalba', message: 'success'});
    }

    return res.status(403).json({message: 'User not found'});
  } catch (e) {
    console.log(e);
    return res.status(500).json({message: e.message, error: 'Example error'});
  }
});

server.post('/refresh', (req, res) => {
  const {token} = req.body;

  res.status(200).json({new_token: token});
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({message: 'AUTH ERROR'});
  }
  next();
});

server.use(router);

server.listen(2000, () => {
  console.log('server is running on 2000 port');
});
