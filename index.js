// using express
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

// stores the username and password of the user
app.post('/test', (req, res, next) => {
  
  console.log("this is the body", req.body)
  res.status(202).send({"message": "authorize"})
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
