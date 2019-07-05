const path = require("path");

module.exports = function(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    })

    app.get("/figures", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/figures.html"));
    })

    app.get("/landscapes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/landscapes.html"));
    })

    app.get("/illustrations", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/illustrations.html"));
    })
}