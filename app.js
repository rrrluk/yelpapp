var express = require("express");
var app = express();
var appPort = 8006;

// Landing page
app.get("/", function (req, res) {
    res.render("landing.ejs");
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [{
            name: "Salmon Creek",
            image: "https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104496f1c07aa6edb2bb_340.jpg"
        },
        {
            name: "Whateva Mountain",
            image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f1c07aa6edb2bb_340.jpg"
        },
        {
            name: "Hipi Meadow",
            image: "https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104496f1c07aa6edb2bb_340.jpg"
        },
    ];
    res.render("campgrounds.ejs", {
        campgrounds: campgrounds
    });

});

// SERVER START
app.listen(appPort, "localhost", function () {
    console.log("yelpapp started on port " + appPort);
});