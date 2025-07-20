// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
.then( () => {
  app.on("error", (error) => {
    console.log("ERRR : ", error);
    throw error;
  });
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running in port: ${process.env.PORT || 8000}`);
    
  })
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});









/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR : ", error);
      throw error;
    });

    app.listen(process.env.port, () => {
      console.log(`Server is running on port ${process.env.port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();
*/