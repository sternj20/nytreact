const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");
router.route("/")
	.get(articleController.findAll)
	.post(articleController.create);

module.exports = router;