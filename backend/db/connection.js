const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/IntelliTicks').then(() => {
    console.log("Connected to MongoDB database!");
}).catch(err => {
    console.log("MongoDB Connection failed! " + err);
    process.exit(1);
});