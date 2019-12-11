import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './carshock.css'

class Control extends React.Component {

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

				<h3 className="center title">Control</h3>
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
						<p><b>Cette fonctionnalité de CarConnect vous permet de contrôler votre véhicule depuis n importe quel endroit.</b></p>
						<p><b>Nous utilisons les réseaux mobiles afin de nous démarquer de nos concurrents qui eux utilisent le bluetooth ou le wi-fi afin de communiquer avec votre voiture.</b></p>
						<p><b>Afin de couvrir un maximum de territoire grâce à ce réseau, nous utilisons des cartes sim multi-opérateurs.</b></p>
						<br />
						<p><b>Ce système "Control" va vous permettre de démarrer / arrêter,  verrouiller / déverrouiller, ou accéder aux mutiples fonctionnalités du véhicule.</b></p>
					</div>
				</div>

			</div>

			</div>
		)
  }
}

export default Control;
