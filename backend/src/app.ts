import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/employees";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees", router);

export default app;
