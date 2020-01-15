import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './carshock.css'

class Notifications extends React.Component {

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

				<h3 className="center title">Notification</h3>
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
						<p><b>Grâce à CarConnect vous allez pouvoir être alerté de l état de votre véhicule.</b></p>
						<p><b>Personnalisez les notifications que vous voulez recevoir.</b></p>
						<p><b>Via sa couverture réseau, votre véhicule sera capable de vous alerter dans n importe quelle condition</b></p>
						<br />
						<p><b></b></p>
						<p><b></b></p>
						<p><b></b></p>
						<p><b>Ne manquez plus rien, CarConnect vous informe.</b></p>
					</div>
				</div>

			</div>

			</div>
		)
  }
}

export default Notifications;
