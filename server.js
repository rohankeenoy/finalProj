require('dotenv').config();
const app = require('./index');
const mongoose = require('mongoose');
const port = 8000;

// connect to mongoDB
mongoose.connect(process.env.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(port, () => {
      console.log(`Running on:  http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Could not connect to db', err);
  });
