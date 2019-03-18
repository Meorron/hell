import React, { Component } from 'react';

export default class AddHero extends React.Component {
	constructor (){
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event){
		let newHero = {
			name: this.input.value,
			desc: 
			
		};
		event.preventDefault();
	}

	render() {
		return(
				<>
					<section className="section">
						<div className="container">
							<h1>добавьте нового героя</h1>
						
							<form onSubmit={this.onSubmit}>
							  <div className="form-group">
							    <label for="exampleInputEmail1">Name</label>
							    <input type="text" className="inputHeroName"  placeholder="Enter name of your hero" ref={(el) => this.input = el}/>	    
							  </div>
							  {/*<div className="form-group">
							    <label for="exampleInputPassword1">Description</label>
							    <input type="text" className="inputHeroDesc" placeholder="Enter description of your hero"/>
							  </div>
							  <div className="form-group form-check">
							    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							    <label className="heroSide" for="exampleCheck1">Evil</label>
							  </div>
							  <div className="form-group form-check">
							    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							    <label className="heroSide" for="exampleCheck1">Good</label>
							  </div>*/}
							  <button type="submit">Done</button>
							</form>
						</div>
					</section>
				</>
			)
	}
}