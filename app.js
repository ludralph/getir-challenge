const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

const recordsRouter = require('./routers/records');
const { clientErrorHandler, serverErrorHandler, notFoundHandler } = require('./utils/response')

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', recordsRouter);

app.use(clientErrorHandler);
app.use(serverErrorHandler);
app.use(notFoundHandler);
module.exports = app;