require("dotenv").config();
const express = require("express");
const app = express();
const dbconnection = require("./config/db")
const productRouter = require("./routes/router")



dbconnection()

app.use(express.json())

app.use("/api/products",productRouter)

const PORT = process.env.PORT

app.listen(PORT,()=>`server running in turbo speed `)