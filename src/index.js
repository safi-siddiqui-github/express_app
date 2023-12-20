import {config} from "dotenv";
import {connectMongoDB} from "./db/mongo_db.js";
import app from "./app.js";

config({path: "./.env"});

connectMongoDB()
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log("APP Running on Port", process.env.APP_PORT);
    });
  })
  .catch((err) => {
    console.log("Mongo DB Sever Error", err);
  });
