const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: Number,
        required: true,
        trim: true
    }
});


const Property = mongoose.model("Property", propertySchema);
module.exports = Property;