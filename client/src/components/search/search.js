import React, { Component } from "react";
import "./search.css";
import API from "../../utils/API.js";

class Search extends Component{

	searchArticles = event => {
		event.preventDefault();
		API.search()
			.then(function (response) {
			console.log(response.data.results);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render(){
		return (
			<div>
				<h1 className ="header">Search</h1>
				<form action="" method="POST" role="form">
					<div className="form-group">
						<div className="header">Start Year</div>
						<textarea className="form-control" rows="1" id="comment"></textarea>
						<div className="header">Topic</div>
						<textarea className="form-control" rows="1" id="comment"></textarea>
						<div className="header">End Year</div>
						<textarea className="form-control" rows="1" id="comment"></textarea>
					</div>
		      <button
          onClick={this.searchArticles}
        	>
          Search Articles
        	</button>
				</form>
			</div>
		)
	}
}

export default Search