import React from 'react';
import Media from 'react-media';

import 'bootstrap/dist/css/bootstrap.css';
import './mail.css'

import { IoMdTime } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

class Mail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fullname: "",
			email: "",
			tel: "",
			body: ""
		}
		this.setObject = this.setObject.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setFrom(text) {
		this.setState({from: text})
	}

	setObject(event) {
		this.setState({object: event.target.value})
	}

	setBody(text) {
		this.setState({body: text})
	}

	handleSubmit(event) {
		console.log(this.state.from);
		event.preventDefault();
	}

  render() {
  	return (
			<div className="mail">
				<div className="left">
					<div className="mail-element">
						<IoMdTime className="mail-icons" />
						<label className="mail-title">Jours d&apos;ouverture</label>
						<p className="mail-desc">Lundi - Vendredi : 9h - 18h</p>
						<p className="mail-desc">Samedi : 9h - 12h</p>
					</div>
					<hr className="separate-section" />
					<div className="mail-element">
						<FaPhone className="mail-icons" />
						<label className="mail-title">Téléphone</label>
						<p className="mail-desc">(+33) 6.84.35.56.29</p>
					</div>
					<hr className="separate-section" />
					<div className="mail-element">
						<IoIosMail className="mail-icons" />
						<label className="mail-title">Email</label>
						<p className="mail-desc">axel.vandenabeele@epitech.eu</p>
					</div>
				</div>
				<hr className="separate-line" />
				<div className="center">
					<div className="form-group">
						<label>Votre email
							<input type="email" className="form-control"/>
						</label>
					</div>
				</div>
			</div>
		)
  }
}

export default Mail;
