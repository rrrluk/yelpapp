const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}));

// MINU VARIABLED
var appPort = 8006;
var campgrounds = [{
        name: "Salmon Creek",
        image: "https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807__340.jpg"
    },
    {
        name: "Whateva Mountain",
        image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"
    },
    {
        name: "Hipi Meadow",
        image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719__340.jpg"
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