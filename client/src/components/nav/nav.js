import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () =>
	<nav className="navbar navbar-default" role="navigation">
		<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<span className ="navbar-brand">
					<Link to ={"/"}>NY TIMES REACT</Link>
				</span>
			</div>

			<div className="collapse navbar-collapse navbar-ex1-collapse">
				<ul className="nav navbar-nav navbar-left">
							<li><Link to={"/search/"}>Search</Link></li>
							<li><Link to={"/saved/"}>Saved</Link></li>
				</ul>
			</div>
		</div>
	</nav>
export default Nav;

