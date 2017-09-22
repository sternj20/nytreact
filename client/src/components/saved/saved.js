import React, { Component } from "react";
import API from "../../utils/API"
import "./saved.css";


class Saved extends Component {

	state = {
		saved: []
	}
	componentDidMount(){
		this.getSaved()
	}

	getSaved = () => {
		API.getArticles()
			.then(res =>{
				this.setState({	saved: res.data})
				console.log(this.state)
			}
			)
      .catch(err => console.log(err));
	}
	render() {
		return (
			<div>
				{this.state.saved}
			</div>
		)
	}
}

export default Saved;
