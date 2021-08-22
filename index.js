const express = require('express');
const app = express();

const port = 8000;

// we check if the server is running
app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
