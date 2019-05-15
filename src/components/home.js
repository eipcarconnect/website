import React from 'react';
import { Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './home.css'

import angular from '../assets/angular.png'
import ionic from '../assets/ionic.png'
import atom from '../assets/atom.png'
import css from '../assets/css.png'
import github from '../assets/github.svg'
import heroku from '../assets/heroku.png'
import html from '../assets/html.png'
import node from '../assets/node.png'
import rails from '../assets/rails.png'
import react from '../assets/react.png'

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pass: 0,
		}
	}

	async componentDidMount() {
		this.textTurn();
	}

	removeTitleClass (title) {
		title.classList.remove("title");
		void title.offsetWidth;
		title.classList.add("title");
	}

	textTurn () {
		var title = document.getElementById("title");
		var subtitle = document.getElementById("subtitle");
		if (this.state.pass === 0) {
			title.textContent = "Axel VANDENABEELE"
			subtitle.textContent = "Développeur indépendant"
			this.setState({pass: 1});
		}
		else if (this.state.pass === 1) {
			title.textContent = "SITES ET APPLICATIONS"
			subtitle.textContent = "Design responsive"
			this.setState({pass: 2});
		} else if(this.state.pass === 2) {
			title.textContent = "SUIVI PROFESSIONNEL"
			subtitle.textContent = "À votre écoute"
			this.setState({pass: 0});
		}
		this.removeTitleClass(title);

		setTimeout(() => {
			this.textTurn();
		}, 5000);
	}

  render() {
  	return (
			<div>
				<div className="align">
					<ul>
						<li>
							<h1 id="title" className="title"></h1>
							<h3 id="subtitle" className="center subtitle"></h3>
						</li>
					</ul>
				</div>
				<Image src={angular} alt="angular" className="brand angular"/>
				<Image src={ionic} alt="ionic" className="brand ionic"/>
				<Image src={atom} alt="atom" className="brand atom"/>
				<Image src={css} alt="css" className="brand css"/>
				<Image src={github} alt="github" className="brand github"/>
				<Image src={heroku} alt="heroku" className="brand heroku"/>
				<Image src={html} alt="html" className="brand html"/>
				<Image src={node} alt="node" className="brand node"/>
				<Image src={rails} alt="rails" className="brand rails"/>
				<Image src={react} alt="react" className="brand react"/>
			</div>
		)
  }
}

export default Home;
