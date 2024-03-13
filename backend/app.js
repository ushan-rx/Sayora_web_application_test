const express = require('express')
const connectDB = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 5000;  //server port
const app = express()

// middleware

app.use(express.static('./public'));
app.use(express.json());

//server start
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };