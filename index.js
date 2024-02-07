import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./route.js";

const app = express();
app.use(express.json({ limit: "50mb" }));

// JWT Authentication
app.use("/", router);

const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT);
  console.log(`Listening to the port ${PORT}`);
} catch (error) {
  console.log("Error in index , failed while listening to the server");
}

try {
  mongoose.connect(process.env.DB_URL);
  console.log(`connected to the database successfully`);
} catch (error) {
  console.log(`Error while connecting to the database, error : ${error}`);
}

export default app;
