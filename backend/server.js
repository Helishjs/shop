const express = require("express");
const dotenv = require("dotenv");
const ConnectDb = require("./config/db");
const router = require("./router/route");
const port = 3000;
const app = express();
const cors =require("cors");
app.use(cors());

dotenv.config();
ConnectDb();
app.use(express.json());
router(app);

app.listen(port,()=>{
    console.log(`server running http://localhost:${port}`)
})