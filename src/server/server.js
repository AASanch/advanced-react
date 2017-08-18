import express from "express";
import config from "./config";

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(config.port, function listenHandler() {
    console.log(`Running on ${config.port}`)
});

