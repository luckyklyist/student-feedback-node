import mongoose from "mongoose";
import config from "config";

function connectDB() {
    const dbUrl = config.get<string>("dbURI");
    mongoose
      .connect(dbUrl)
      .then(() => {
        console.log('Connected to the database');
      })
      .catch((error) => {
        console.error('Error connecting to the database:', error);
      });
  }

export default connectDB;