import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './carshock.css'

class Battery extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	async componentDidMount() {
	}

	render() {
  	return (
			<div>

			<div>

				<h3 className="center title">Batterie</h3>
				<hr />

				<div className="left-component">
					<div className="center-item align-youtube">
						<iframe type="text/html" title="youtube"
							src="https://www.youtube.com/embed/DmUDns9OaeM?autoplay=1&origin=http://example.com"
							className="ytb-player"></iframe>
					</div>
				</div>

				<div className="right-component">
					<div className="margin-class">
						<h3 className="center title">Descriptif</h3>
						<hr />
						<br />
						<br />
						<br />
						<p><b>Le module de commande de CarConnect est équipé d une batterie interne afin de pouvoir agir lorsque le véhicule est à l ârret</b></p>
						<p><b>La prise OBD-II étant alimenté, le boitier pourra puiser de l énergie directement au véhicule</b></p>
						<p><b>Grâce à l application, l utilisateur pourra définir le pourcentage de batterie que le boitié pourra récuperer au véhicule.</b></p>
						<br />
						<p><b>L application vous permettra d avoir une estimation du temps restant dans le boitier.</b></p>
						<p><b></b></p>
						<p><b></b></p>
						<p><b>Restez au courant le plus longtemps possible grâce à CarConnect</b></p>
					</div>
				</div>

			</div>

			</div>
		)
  }
}

export default Battery;
