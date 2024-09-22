import express from "express";
import morgan from "morgan";
import cors from "cors";
import bookRouter from "./routes/book.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

// Routes
app.use("/api/book", bookRouter);

export default app;
