import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";

import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { default as appInfoRouter } from "./routes/appInfoRoute.js";
import { default as repoInfoRouter } from "./routes/repoInfoRoute.js";
import { default as experienceRouter } from "./routes/experienceRoute.js";

dotenv.config(); // Configure .env
const app = express(); // Initialize App
const PORT = process.env.PORT || 3000; // Initialize Port

// Middleware
app.use(cors());
app.use(errorHandler);
app.use(morgan(process.env.NODE_ENV));
app.use(express.json({ limit: "200mb", extended: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

// Routes
app.use("/api/app-info", appInfoRouter);
app.use("/api/repo-info", repoInfoRouter);
app.use("/api/experience", experienceRouter);

// Starting the Server
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server Active on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

startServer();