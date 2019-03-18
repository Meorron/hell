import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <Link to={'/'} className="navbar-brand" >{this.props.appName}</Link>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <Link to={'/addHero'} className="nav-link">Add Hero</Link>
				      </li>
				      <li className="nav-item">
				        <Link to={'/settings'} className="nav-link" >Settings</Link>
				      </li>
				      <li className="nav-item">
				        <Link to={'/heroPics'} className="nav-link" >Images</Link>
				      </li>

				    </ul>
				 
				  </div>
				</nav>
			)
	}
}