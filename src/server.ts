import express from "express";
import { router } from "./routes/routes";
import 'express-async-errors';
import cors from "cors";

import "./database";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, ()=> console.log("Server running on port 3333"));