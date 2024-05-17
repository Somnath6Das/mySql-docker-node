import express from "express";
import appRouter from "./src/routes/index.js";

import { connectionToDatabase } from "./src/db/index.js";


const app = express();

// middleware
app.use(express.json());

app.use("/api/v1/products", appRouter);

const PORT = process.env.PORT || 4000;

connectionToDatabase().then(() => {
  app.listen(PORT, () => console.log(`App listening on ${PORT}`));
}).catch((err)=>{
    console.log("Error occurred with mysql connection:",err);
    process.exit(0);
});
