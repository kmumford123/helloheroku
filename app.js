var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "index.html"))
});

app.get("/api/cars", function(res, req) {
    var cars = [{
            make: "Audi",
            model: "R6"
        },
        {
            make: "Acura",
            model: "MDX"
        },
        {
            make: "Jeep",
            model: "Cherokee"
        }, {
            make: "Ford",
            model: "Explorer"
        }
    ]
    res.send(cars);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});