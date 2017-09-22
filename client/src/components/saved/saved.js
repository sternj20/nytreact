import React, { Component } from "react";
import API from "../../utils/API"
import "./saved.css";


class Saved extends Component {

	state = {
		saved: []
	}
	componentDidMount(){
		this.getSaved()
		console.log(this.state)
	}

	getSaved = () => {
		API.getArticles()
			.then(res =>{
				console.log(res.data)
				this.setState({	saved: res.data})
				console.log(this.state)
			}
			)
      .catch(err => console.log(err));
	}
	render() {
		return (
			<div>
				{this.state.saved.map(article => (
					<div className="panel panel-default">
						<div className="panel-body">
							<a href={article.url} target="_blank">{article.title}</a>
						</div>
					</div>
					))}
				</div>
		)
	}
}

export default Saved;
