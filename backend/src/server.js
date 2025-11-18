import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();
const app = express();

connectDB();
// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(rateLimiter);
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & req url is ${req.url}`);
//   next();
// });

// routes
app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
