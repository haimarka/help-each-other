import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import mongo from "mongodb";
const MongoClient = mongo.MongoClient;
const objectID = mongo.ObjectId;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const DATA_BASE = "freeToHelp";

import { registerVolunteers ,clientRegister} from "./utils/register.js";


const app = express();
app.use(express.json());

app.post("/register/volunteer", (req, res) => {
  registerVolunteers(req, res);
});

app.post("/register/client", (req, res) => {
  clientRegister(req, res);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is loading ...... ${PORT}`);
});
