const Article = require("../models/article.js");

module.exports= {
	findAll: (req, res) => {
		console.log('finding articles')
		Article.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	create: (req,res) => {
		console.log('adding article')
		Article.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	}
}