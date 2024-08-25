const { exec } = require("child_process");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("templates"));
app.use(express.json());
app.post("/text", (req, res) => {
    fs.writeFileSync("input.txt", req.body.text);
    return res.json("Text Saved Successfully");
});
app.post("/search", (req, res) => {
    fs.writeFileSync("search.txt", req.body.text);
    exec("main.exe input.txt search.txt", (err, out) => {
        if (err){
            console.log(err);
            return;
        }
        console.log(out);
        let outputIndex = out.split(" ");
        console.log(outputIndex);
    });
    console.log(req.body.text);
    return res.json("Text Saved Successfully");
});
app.listen(3000, () => {
    console.log("Server Working on Port 3000");
});
