const express = require('express');
const app = express();
const cors = require('cors');
const usersRouter = require('./routes/users');
// require('./db'); // Ensure database connection is established

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());
app.use('/users', usersRouter); // Mount usersRouter at /users prefix

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
