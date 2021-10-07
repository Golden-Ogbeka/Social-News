import dotenv from "dotenv";
dotenv.config();
import express from "express";

const DEFAULT_SERVER_PORT = 4000;
const app = express();

app.use(express.json());

app.listen(process.env.SERVER_PORT || DEFAULT_SERVER_PORT, () => {
  console.log(
    `Server listening on port: ${
      process.env.SERVER_PORT || DEFAULT_SERVER_PORT
    }`
  );
});
