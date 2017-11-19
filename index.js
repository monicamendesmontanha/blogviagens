const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs")

app.get("/", function(request, response) {
    response.render("pages/index");
});

app.get("/destinos", function(request, response) {
    response.render("pages/destinos");
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});