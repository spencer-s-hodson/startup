const express = require('express');
const app = express();

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// stores the username and password of the user
app.post('/login', (req, res) => {
  message = loginStatement(req.body.username, req.body.password)
  console.log("this is the body", req.body)
  res.status(message[0]).send({"message": message[1]})
});

// 501 server error 401 frontend error, know the difference
users = {}
function loginStatement(username, password) {
    console.log(username, password)
  if ((username in users) && (users[username] != password)) { // username exists, wrong password
    return [501, "Incorrect Password"] 
  }
  else if (!(username in users)) { // creates a new user, and assigns the password
    users[username] = password
    return [201, "User Created"]
}
  else if ((username in users) && (users[username] === password)) {
    return [201, "Successful Login"]
  }
}

let array = []
app.post('/joinSession', (req, res) => {
    array.push(req.body)
    console.log("this is the body", req.body)
    res.status(201).send({"message": "User joined Zoom"})
  });

// make sure that i populate the array before i get it
app.get('/history/:username', (req, res) => {
    res.send(array)
})


app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

// THIS IS GOOD
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
