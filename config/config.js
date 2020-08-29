const dotenv = require('dotenv');

dotenv.config();

const ENV = process.env.NODE_ENV;
const MONGODB_URI =
  process.env.MONGODB_URI || '';
const PORT = process.env.PORT || 5000;

module.exports = {
  ENV,
  MONGODB_URI,
  PORT
};