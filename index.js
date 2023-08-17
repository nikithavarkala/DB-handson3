const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url = "mongodb://0.0.0.0:27017/Employee";

const connection=require("./config/dbMongoose")
const express = require("express");
const route = require("./Routes/routes");
const app = express();

// const student = require(".");

app.use(express.json());

app.use("/api", route);

app.get("/", (req, res) => {
    res.send({ msg: "this is a testing phase" });
});

app.listen(3001, async () => {
    try {
        await connection(url);
        console.log("server running on port 3001,connected to db");
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});