import React, { Component } from "react";
//import HeroPics from './Components/heroPics/HeroPics.jsx';

export default class HeroPics extends Component {
		render() {

		return(
			<>
				<div className="row">
   						{
   							this.props.pics.map((img, i) => {
			        		return(
			        				<img key={i} srс={img}/>
			        			)
			        		})
   						}
				</div>
			</>
		)
	}
}