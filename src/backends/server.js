const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://QuangHuy:CA5trwkj1mDZOq8u@cluster0.pq4wbpi.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Assignment 1 full dev</h1>");
});
const EmployeeRoute = require('./routes/EmployeeRoute');
const UserRoute = require('./routes/UserRoutes');
app.use('/api/v1/emp', EmployeeRoute);
app.use('/api/v1/users', UserRoute);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
