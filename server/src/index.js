import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import  {userRouter } from '/Users/divya/Desktop/MERN-STACK/server/routes/users.js';


const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://gofordivya:ErpiAa2NrXN2aerp@recipes.0fkfcya.mongodb.net/recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));
