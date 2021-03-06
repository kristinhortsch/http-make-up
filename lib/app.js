const express = require('express');
const app = express();
const colors = require('./routes/colors');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');
const connection = require('./middleware/connection');

app.use(express.json());
app.use(connection);
app.use('/colors', colors);
app.use(notFound);
app.use(handler);

module.exports = app;
