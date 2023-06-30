import mongoose from "mongoose";
import config from "config";
import log from '../utils/logger'

function connectDB() {
    const dbUrl = config.get<string>("dbURI");
    mongoose
      .connect(dbUrl)
      .then(() => {
        log.info('Connected to the database');
      })
      .catch((error) => {
        log.error('Error connecting to the database:', error);
      });
  }

export default connectDB;