var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}));

// MINU VARIABLED
var appPort = 8006;
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

// Landing page
app.get("/", function (req, res) {
    res.render("landing.ejs");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds.ejs", {
        campgrounds: campgrounds
    });
});


app.post("/campgrounds", function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampGround = {
        name: name,
        image: image,
    }
    campgrounds.push(newCampGround);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});



// SERVER START
app.listen(appPort, "localhost", function () {
    console.log("yelpapp started on port " + appPort);
});