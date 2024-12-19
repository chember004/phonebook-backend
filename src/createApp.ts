import express from "express";
import routes from "./routes";
import "./config/passport/local";
import passport from "passport";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  //PASSPORT
  app.use(passport.initialize());
  app.use(passport.session());
  //ROUTES
  app.use("/api/user", routes);

  return app;
};
