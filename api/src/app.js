const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

var urlEncodedParser = bodyParser.urlencoded

const app = express();
app.use(cors());
app.use(express.json());




module.exports = app;
