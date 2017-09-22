import axios from "axios";

export default {
	search: (query, startYr, endYr) => {
		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
		{
			params: {
				"api-key": "334eeb85a6c24552a8ca832b3e6dec37",
				"q": query,
				"begin_date": `${startYr}0101`,
				"end_date": `${endYr}0101`
			}
		})
	},

	getArticles: () => {
		return axios.get("/api/articles")
	},

	saveArticle: (data) => {
		return axios.post("/api/article", data)
	}
}

