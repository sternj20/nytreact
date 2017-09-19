import axios from "axios";

export default {
	search: function() {
		return axios.get("https://api.nytimes.com/svc/topstories/v2/home.json",
		{
			params: {
				'api-key': "334eeb85a6c24552a8ca832b3e6dec37"
			}
		})
	}
}

