const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
module.exports = app;

// mongodb+srv://nidhi4upooja_db_user:0IRBOKHM5wBK1bKQ@cluster0.oxb3oig.mongodb.net/
