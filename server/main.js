import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import ProjectRouter from "./routes/projects.routes.mjs";
import logger from "./middlewares/middleware.mjs";

dotenv.config();

const app = express();
// CORS SETUP
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: false,
    }
));

app.use(logger);

app.use(express.json());

app.use("/project", ProjectRouter);
const PORT = process.env.BACKEND_PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
