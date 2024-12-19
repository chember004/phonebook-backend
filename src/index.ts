import { mongoDbConnect } from "./config/dbMongo";
import { createApp } from "./createApp";

mongoDbConnect();
const app = createApp();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `****************\nServer running on port ${PORT}\n****************`
  )
);
