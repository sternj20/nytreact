const router = require("express").Router();
const apiRoutes = require("./article");

router.use("/article", apiRoutes);

module.exports = router;
