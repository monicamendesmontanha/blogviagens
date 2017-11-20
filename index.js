const express = require("express");
const moment = require("moment");
const app = express();
const port = 3000;
const date = moment().format('dddd, D MMMM YYYY')

app.use(express.static("public"));

app.set("view engine", "ejs")

app.get("/", function(request, response) {
    response.render("pages/index", {date: date});
});

app.get("/destinos", function(request, response) {
    response.render("pages/destinos", {date: date});
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});