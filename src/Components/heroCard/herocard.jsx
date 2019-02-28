import React, { Component } from 'react';

export default class HeroСard extends Component{
	render() {
		return(
				<div className = "col-md-3">
					<div className = "card">
						<div className = "card-header">
							<div className = "card-title">
								{this.props.data.name}
							</div>
						</div>
						<div className = "card-body">
							{this.props.data.desc}
						</div>
					</div>
				</div>


			)
	}
}