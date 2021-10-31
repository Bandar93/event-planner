const express = require("express");
const productRoute = require("./apis/products/routes")
const app = express();
const PORT = 8000;
const connectDB = require("./database")
connectDB();
app.use(express.json());

app.use("/api/events",productRoute)
app.listen(PORT,() => console.log(`working ${PORT}`))