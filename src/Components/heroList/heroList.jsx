import React, { Component } from 'react';
import HeroCard from "../heroCard/herocard.jsx"


export default class HeroList extends Component{
	render() {
		return(
			<>
				<div className = "container">
					<h1>Список героев</h1>
					<div className="container row">
						{
							this.props.heroes.map((hero, i) => {
							return(
								 	<HeroCard key={i} data={hero}/>
								)
							})
						}
					</div>
				</div>
			</>
		)
	}
}