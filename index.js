const connection = require('./db-config');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

// we declare some middlewares
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3030'],
  })
);

require('./routes')(app);

// we check if the connection with the db is working
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log(
      'connected to database with threadId :  ' + connection.threadId
    );
  }
});

// we check if the server is running
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port} 👌`);
  }
});
