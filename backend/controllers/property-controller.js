const Property = require("../models/property-model");
var ObjectId = require("mongodb").ObjectId;

// create property
exports.createProperty = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!req.body) return resolve({ message: "Property should not be empty" });
            const property = new Property(req.body);
            await property.save();
            resolve({ message: "Property Created Successfully", property })
        } catch (error) {
            reject({ error: error.message });
        }
    })
}

// get project property
exports.getProperty = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const property = await Property.find();
            resolve({ message: "Successfull Get Property", property })
        } catch (error) {
            reject({ error: error.message });
        }
    })
}

// delete property
exports.deleteProperty = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const propertyIDs = req.body.propertyId
            if (!req.body.propertyId) return resolve({ message: "Property ID is required" })
            const property = await Property.deleteMany({
                _id: { $in: propertyIDs }
            });
            resolve({ message: "Successfull Deleted Property", property })
        } catch (error) {
            reject({ error: error.message });
        }
    })
}
