require("dotenv").config();
const express = require("express");
const app = express();

const PORT =8080
app.listen(PORT,()=>`server running in turbo speed `)