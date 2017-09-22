const router = require("express").Router();
const apiRoutes = require("./article");

// Book routes
router.use("/article", apiRoutes);

module.exports = router;
