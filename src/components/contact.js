import React from 'react';
import Media from 'react-media';

import 'bootstrap/dist/css/bootstrap.css';
import './contact.css'

import { IoLogoGithub } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "axel.vandenabeele@epitech.eu",
			phone: "(+33.6.84.35.56.29)"
		}
	}

  render() {
  	return (
			<div>

				<Media query="(max-width: 991px)">
					<div className="contact center">
						<ul>
							<li>
								<a className="reseau inline" href="tel:+33684355629">
									<FaPhone className="icon"/>
									<h6>{this.state.phone}</h6>
								</a>
								<a className="reseau inline" href="mailto:axel.vandenabeele@epitech.eu">
									<IoIosMail className="icon"/>
									<h6>{this.state.email}</h6>
								</a>
							</li>
						</ul>
						<div className="social">
							<a className="reseau" href="https://github.com/Axelvdbl"><IoLogoGithub className="icon" /></a>
							<IoLogoFacebook className="icon" />
							<IoLogoTwitter className="icon" />
							<IoLogoLinkedin className="icon" />
						</div>
					</div>
				</Media>

				<Media query="(min-width: 992px)">
					<div className="contact">
						<ul>
							<li>
								<a className="reseau" href="https://github.com/Axelvdbl"><IoLogoGithub className="icon" /></a>
								<a className="reseau" href="/presentation"><IoLogoFacebook className="icon" /></a>
								<a className="reseau" href="/presentation"><IoLogoTwitter className="icon" /></a>
								<a className="reseau" href="https://www.linkedin.com/in/axel-vandenabeele-1a5886136/"><IoLogoLinkedin className="icon" /></a>
							</li>
							<li className="com">
								<a className="reseau inline" href="tel:+33684355629">
									<FaPhone className="icon"/>
									<h6>{this.state.phone}</h6>
								</a>
								<a className="reseau inline" href="mailto:axel.vandenabeele@epitech.eu">
									<IoIosMail className="icon"/>
									<h6>{this.state.email}</h6>
								</a>
							</li>
						</ul>
					</div>
				</Media>

			</div>
		)
  }
}

export default Contact;
