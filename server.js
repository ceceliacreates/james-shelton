const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);

app.listen(PORT, function () {
    console.log("App running on PORT " + PORT);
})