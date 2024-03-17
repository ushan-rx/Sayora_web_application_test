require('dotenv').config();
const express = require('express')
const connectDB = require('./db/connect.js');
const { default: mongoose } = require('mongoose');


const port = process.env.PORT || 5000; //server port
const app = express()

// middleware

app.use(express.static('./public'));
app.use(express.json());


// //server start
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();

app.get('/', (req, res) => {
    res.send(`Hello ${port}`)
});

app.post('/api/booking', (req, res) => {
    console.log(req.body);
    res.send(req.body);


});