var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send({ message: "Hello, World!" });
});

app.get("/foo", function(req, res) {
    res.send({ message: "foo foo" });
});

app.listen(process.env.PORT || 3000);
