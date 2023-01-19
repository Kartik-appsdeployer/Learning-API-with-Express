const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstapi');
const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const firstApi = require('./routes/firstApi');
app.use('/firstApi', firstApi);

app.listen(3000, () => console.log("Server Chal gya hai"));