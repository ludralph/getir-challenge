const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { ENV, MONGODB_URI } = require('../config/config');

dotenv.config();

mongoose.Promise = global.Promise;

if (ENV === 'development') {
  mongoose.set('debug', true);
}

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
    return db;
  } catch (err) {
    mongoose.connection.on('error', () => {
      throw new Error(`Unable to connect to database ${err}`);
    });
  }
};

module.exports = dbConnection;