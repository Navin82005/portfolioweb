import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import ProjectRouter from "./routes/projects.routes.mjs";
import logger from "./middlewares/middleware.mjs";

dotenv.config();

const app = express();
// CORS SETUP
// app.use(cors(
//     {
//         // origin: "http://localhost:5173",
//         origin: "https://naveen82005n.netlify.app/",
//         credentials: false,
//     }
// ));
// app.use(cors({ origin: true }));

// Option 1: Use the `cors` middleware (recommended)
app.use(cors({
    origin: 'https://naveen82005n.netlify.app',
    credentials: true,
}));

// Option 2: Manually set headers (if you want more control)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://naveen82005n.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Optional: handle preflight OPTIONS request
// app.options('*', cors());

// app.use(cors({
//     origin: "https://naveen82005n.netlify.app",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     // credentials: true, // only if you need cookies or auth headers
// }));

// app.options('*', cors());

app.use(logger);

app.use(express.json());

app.use("/project", ProjectRouter);
const PORT = process.env.BACKEND_PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
