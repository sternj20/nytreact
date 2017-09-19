import axios from "axios";

export default {
	search: function() {
		return axios.get("http://www.newyorktimes.com")
	}
}