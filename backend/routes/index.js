const propertyRoutes = require("./property-route");

module.exports = (app) => {
    app.use("/api/property", propertyRoutes);
};