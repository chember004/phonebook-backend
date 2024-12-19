import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const mongoDbConnect = () => {
  mongoose //192.168.1.18 test in docker
    .connect(
      `mongodb+srv://admin:admin@phonebookdb.0zu3x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=phonebookDb`
    )
    .then(() =>
      console.log(
        "****************\nConnected to the MONGODB database \n****************"
      )
    )
    .catch((err) => console.log(`Error: ${err}`));

  return mongoose;
};
