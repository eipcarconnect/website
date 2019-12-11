import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './carshock.css'

class Carshock extends React.Component {

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

				<h3 className="center title">Carshock</h3>
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
						<p><b>Carshock est une fonctionnalité de CarConnect jouant le rôle de bodyguard pour votre véhicule. Soyez serein, peu importe l endroit.</b></p>
						<p><b>En cas de choc, celui-ci détecte et active les caméras de votre véhicule tout en respectant les droits à la vie privée des autres usagers. </b></p>
						<p><b>Votre assurance est ainsi au courant en direct de ce qu il vient de se passer sur votre voiture.</b></p>
						<br />
						<p><b>Carshock vous laisse la possibilité d ajouter vous même des caméras dans l habitacle de votre véhicule, comblant ainsi tout angle mort. </b></p>
						<p><b></b></p>
						<p><b></b></p>
						<p><b>Ne prenez plus peur de vous stationner, Carshock est là.</b></p>
					</div>
				</div>

			</div>

			</div>
		)
  }
}

export default Carshock;
