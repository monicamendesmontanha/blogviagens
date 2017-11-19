const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", function(request, response) {
    response.send("Hello!")
})

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});