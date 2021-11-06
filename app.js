const express = require("express");
const app = express();
const path = require("path");

app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});
