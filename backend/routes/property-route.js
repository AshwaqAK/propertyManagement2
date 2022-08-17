const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property-controller");

// user create property router
router.post("/createProperty", (req, res) => {
    propertyController.createProperty(req).then(response => {
        res.status(201).send(response);
    }).catch(err => { res.status(500).send(err) });
});

// get user property router
router.get("/getProperty", (req, res) => {
    propertyController.getProperty(req).then(response => {
        res.send(response);
    }).catch(err => { res.status(500).send(err) });
});

// delete user property router
router.delete("/deleteProperty", (req, res) => {
    propertyController.deleteProperty(req).then(response => {
        res.send(response);
    }).catch(err => { res.status(500).send(err) });
});

module.exports = router;