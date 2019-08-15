const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var server = express();
var port = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Database models
var slideshowModel = require("./slideshow_schema.js");
var galleryModel = require("./gallery_schema.js");
var contactinfoModel = require("./contactinfo_schema.js");
var headgroomerModel = require("./headgroomer_schema.js");
var staffModel = require("./staff_schema.js");

// REST endpoints
// /slideshow
server.get("/slideshow", function (req, res) {
    slideshowModel.find().then(function (slideshow) {
        res.json({
            slideshow: slideshow
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.post("/slideshow", function (req, res) {
    slideshowModel.create({
        src: req.body.src
    }).then(function (new_picture) {
        res.status(201);
        res.json({
            new_picture: new_picture
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.delete("/slideshow/:id", function (req, res) {
    slideshowModel.findByIdAndDelete(req.params.id).then(function () {
        res.status(204).send();
    }).catch(function (error) {
        res.status(400);
        res.json({
            msg: error.message
        });
    });
});

// /gallery
server.get("/gallery", function (req, res) {
    galleryModel.find().then(function (gallery) {
        res.json({
            gallery: gallery
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.post("/gallery", function (req, res) {
    galleryModel.create({
        src: req.body.src
    }).then(function (new_picture) {
        res.status(201);
        res.json({
            new_picture: new_picture
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.delete("/gallery/:id", function (req, res) {
    galleryModel.findByIdAndDelete(req.params.id).then(function () {
        res.status(204).send();
    }).catch(function (error) {
        res.status(400);
        res.json({
            msg: error.message
        });
    });
});

// /contactinfo
server.get("/contactinfo", function (req, res) {
    contactinfoModel.find().then(function (contactinfo) {
        res.json({
            contactinfo: contactinfo[0]
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.put("/contactinfo", function (req, res) {
    contactinfoModel.findOne().then(function (contactinfo) {
        if (contactinfo == null) {
            new_contact_info = {
                phone: req.body.phone,
                address: req.body.address,
                hours: req.body.hours,
                facebook: req.body.facebook,
                instagram: req.body.instagram,
            };
            contactinfoModel.create(new_contact_info).then(function (contact_info) {
                res.status(201);
                res.json({
                    contact_info: contact_info
                });
            }).catch(function (error) {
                res.status(400).json({
                    msg: error.message
                });
            });
        } else {
            contactinfo.phone = req.body.phone;
            contactinfo.address = req.body.address;
            contactinfo.hours = req.body.hours;
            contactinfo.facebook = req.body.facebook;
            contactinfo.instagram = req.body.instagram;
            contactinfo.save().then(function () {
                res.status(200);
                res.json({
                    contactinfo: contactinfo
                });
            });
        }
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

// /headgroomer
server.get("/headgroomer", function (req, res) {
    headgroomerModel.find().then(function (headgroomer) {
        res.json({
            headgroomer: headgroomer[0]
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.put("/headgroomer", function (req, res) {
    headgroomerModel.findOne().then(function (headgroomer) {
        if (headgroomer == null) {
            head_groomer_info = {
                name: req.body.name,
                title: req.body.title,
                src: req.body.src
            };
            headgroomerModel.create(head_groomer_info).then(function (head_groomer) {
                res.status(201);
                res.json({
                    head_groomer: head_groomer
                });
            }).catch(function (error) {
                res.status(400).json({
                    msg: error.message
                });
            });
        } else {
            headgroomer.name = req.body.name;
            headgroomer.title = req.body.title;
            headgroomer.src = req.body.src;
            headgroomer.save().then(function () {
                res.status(200);
                res.json({
                    headgroomer: headgroomer
                });
            });
        }
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

// /staff
server.get("/staff", function (req, res) {
    staffModel.find().then(function (staff) {
        res.json({
            staff: staff
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.post("/staff", function (req, res) {
    staffModel.create({
        name: req.body.name,
        title: req.body.title,
        src: req.body.src,
        text: req.body.text
    }).then(function (new_employee) {
        res.status(201);
        res.json({
            new_employee: new_employee
        });
    }).catch(function (error) {
        res.status(400).json({
            msg: error.message
        });
    });
});

server.delete("/staff/:id", function (req, res) {
    staffModel.findByIdAndDelete(req.params.id).then(function () {
        res.status(204).send();
    }).catch(function (error) {
        res.status(400);
        res.json({
            msg: error.message
        });
    });
});

server.put("/staff/:id", (req, res) => {
    staffModel.findById(req.params.id).then(function(employee) {
        if (employee == null) {
            res.status(404);
            res.json({
                msg: `There is no employee with the id of ${req.params.id}`
            });
        } else {
            employee.name = req.body.name;
            employee.title = req.body.title;
            employee.src = req.body.src;
            employee.text = req.body.text;
            employee.save().then(function() {
                res.status(200);
                res.json({
                    employee: employee
                });
            });
        }
    }).catch(function(error) {
        res.status(400).json({msg: error.message});
    });
});

// Start the server and connect to the database
mongoose.connect("mongodb+srv://username:username@database-nshf0.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(function () {
    server.listen(port, function () {
        console.log(`Listening on port ${port}`);
    });
});