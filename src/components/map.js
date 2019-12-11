import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './carshock.css'

class Map extends React.Component {

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

					<h3 className="center title">Map</h3>
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
							<p><b>CarConnect dispose également d'une fonction localisation, c'est à dire que vous pouvez voir / revoir l historique de vos positions. </b></p>
							<p><b>Vous allez pouvoir depuis l application enregistrer des lieux favoris afin de créer des itineraires. </b></p>
							<p><b>Grâce à cette focntionnalité, CarConnect enregistrera automatiquement sa localisation au fois stationné et vous previendra en cas de changement de position. </b></p>
						</div>
					</div>

				</div>

			</div>
		)
  }
}

export default Map;
