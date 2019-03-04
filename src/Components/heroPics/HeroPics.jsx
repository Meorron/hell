import HeroPics from './Components/heroPics/HeroPics.jsx';

export default class HeroPics extends Component{
		render() {
		return(
			<>
				<div className = "card-image">
   						{this.props.pics}
				</div>
			</>
		)
	}
}