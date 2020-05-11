import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import methodOverride from "method-override";
import globalErrorHandling from "./middlewares/globalErrorHandling";
import config from "./configs/config";
import mongoose from "mongoose";
import api from "./api/api";
import auth from "./auth/routes";
import initDatabase from "./init/init";

mongoose.connect(`${config.database.url}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

app.use(
  morgan("combined"),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  cors({ origin: "*" }),
  methodOverride(),
  globalErrorHandling() // set up global error handling
);

// set up the api
app.use("/api", api);
app.use("/auth", auth);

initDatabase(config.database.DROP_CREATE);

app.listen(config.port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${config.port}`);
});
