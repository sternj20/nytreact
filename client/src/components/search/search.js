import React, { Component } from "react";
import "./search.css";
import API from "../../utils/API.js";
import SearchResults from "../searchresults";

class Search extends Component{
  constructor() {
    super();

    // Setting initial state to store the input values
    this.state = {
      topic: "",
      startYr: "",
      endYr: "",
      results: []
    };
}
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  	let id = event.target.id
  	let article = this.state.results[id]
  	console.log(id)
  	event.preventDefault();
  		API.saveArticle({
  			title: article.snippet,
  			content: 'hi',
  			url: article.web_url
  		})
  			.then(res => console.log('done'))
        .catch(err => console.log(err));
  }
	searchArticles = (event) => {
		event.preventDefault();
		// console.log(this.state)
		API.search(this.state.topic, this.state.startYr, this.state.endYr)
			.then(res =>{
			this.setState({results:res.data.response.docs})
			console.log(this.state)
			}

		)
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
						<div className="header">Topic</div>
						<textarea
							className="form-control"
							rows="1"
	            onChange={this.handleInputChange}
	            name="topic"
	            placeholder="topic"></textarea>
						<div className="header">Start Year</div>
						<textarea
							className="form-control"
							rows="1"
	            onChange={this.handleInputChange}
	            name="startYr"
	            placeholder="Start Year"></textarea>
						<div className="header">End Year</div>
						<textarea
							className="form-control"
							rows="1"
	            onChange={this.handleInputChange}
	            name="endYr"
	            placeholder="End Year"></textarea>
					</div>
		      <button
          	onClick={this.searchArticles}>
          Search Articles
        	</button>
				</form>
					{this.state.results.map((result, index) => (
						<SearchResults>
							<div className="panel panel-default">
								<div className="panel-body">
								<a href={result.web_url} target="_blank">{result.snippet}</a>
								<button
									id={index}
									onClick={this.handleFormSubmit}>
									Save article
								</button>
								</div>
							</div>
						</SearchResults>
						))
					}
			</div>
		)
	}
}

export default Search