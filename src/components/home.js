import React from 'react';
import { Image } from 'react-bootstrap';

import { FaCarCrash } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBatteryFull } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
// import { FaRegStarHalf } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

import 'bootstrap/dist/css/bootstrap.css';
import './home.css'

import productOne from '../assets/atom.png'
import Team from '../assets/carConnectTeam.jpg'
import Mohan from '../assets/mohan.jpg'
import Loick from '../assets/loick.jpg'
import Augustin from '../assets/augustin.jpg'
import Sebastien from '../assets/sebastien.jpg'
import Thomas from '../assets/thomas.jpg'
import Axel from '../assets/axel.jpg'

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cookies: false,
			name: "",
			job: "",
			sort: true,
			commentPerPage: 10,
			commentPage: 1,
			commentForm: {id: null, title: "", note: 0, body: ""},
			comment: [{id: 1, title: "Très satisfait", note: 4, body: "J'ai acheté ce produit et j'en suis vraiment très satisfait."},
			{id: 2, title: "Je recommande", note: 3, body: "J'ai acheté ce produit et je le recommande vraiment à tout le monde."},
			{id: 3, title: "Ravi", note: 5, body: "Un produit miracle pour jouer le garde du corps de mon véhicule."}]
		}
		this.handleCookieConsent = this.handleCookieConsent.bind(this);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleNumberChange = this.handleNumberChange.bind(this);
		this.changeText = this.changeText.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.changeNote = this.changeNote.bind(this);
		this.postComment = this.postComment.bind(this);
	}

	async componentDidMount() {
		this.setState({name: "Click on picture to see details"})
	}

	handleCookieConsent() {
		this.setState({cookies: true})
	}

	handleSortChange(event) {
		if ((event.target.textContent === "Date" && !this.state.sort) ||
				(event.target.textContent === "Note" && this.state.sort)) {
					this.setState({sort: !this.state.sort})
					this.sortComments();
		}
	}

	sortComments() {
		if (!this.state.sort)
			this.state.comment.sort((a, b) => a.id > b.id)
		else
			this.state.comment.sort((a, b) => a.note < b.note)
	}

	handleNumberChange(event) {
		if ((event.target.textContent === "10" && this.state.commentPerPage !== 10) ||
				(event.target.textContent === "2" && this.state.commentPerPage !== 2) ||
				(event.target.textContent === "50" && this.state.commentPerPage !== 50)) {
					this.setState({commentPerPage: parseInt(event.target.textContent, 10)})
		}
	}

	changeText(el) {
		if (el === "Mohan") {
			this.setState({name: "Mohan Grewis", job: "Bonjour je m'appelle Mohan Grewis passionné par le développement backend, je vais me charger du développement backend de notre solution CarConnect."})
		} else if (el === "Loick") {
			this.setState({name: "Loïck Mury", job: "Bonjour je m’appelle Loick Mury, expérimenté dans le développement mobile, je vais me charger de développer le front de notre application mobile."})
		} else if (el === "Sebastien") {
			this.setState({name: "Sébastien Le Gall", job: "Bonjour, je m'appelle Sébastien Le Gall. Je suis expérimenté dans le développement d'Intelligences Artificielle. C'est moi qui m'occupe de son développement pour notre produit."})
		} else if (el === "Thomas") {
			this.setState({name: "Thomas Dominé", job: "Bonjour je m’appelle Thomas Dominé, passionné par le développement mobile, je vais me charger de développer le back de notre application mobile."})
		} else if (el === "Augustin") {
			this.setState({name: "Augustin Leconte", job: "Bonjour je m'appelle Augustin Leconte. À l'aise avec les gens, je vais me charger de présenter notre produit et de vous expliquer ses enjeux"})
		} else if (el === "Axel") {
			this.setState({name: "Axel Vandenabeele",
			job: "Bonjour, je m'appelle Axel Vandenabeele, je suis le chef de groupe de ce projet. " +
			"Je suis passionné de développement web et mobile. " +
			"C'est moi qui m'occupe de développer ce site afin de présenter notre produit."})
		}
	}

	changeNote(el) {
		this.setState({commentForm: {note: el + 1, title: this.state.commentForm.title, body: this.state.commentForm.body}})
	}

	handleChange(event) {
		if (event.target.name === "title")
			this.setState({commentForm: {title: event.target.value, note: this.state.commentForm.note, body: this.state.commentForm.body}})
		else if (event.target.name === "body")
			this.setState({commentForm: {body: event.target.value, note: this.state.commentForm.note, title: this.state.commentForm.title}})
	}

	postComment(event) {
		event.preventDefault();
		this.state.comment.push({id: 10, title: this.state.commentForm.title, body: this.state.commentForm.body, note: this.state.commentForm.note})
		var request = new XMLHttpRequest();
		request.open('POST', '/comments', true);
		request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		request.send(this.state.comment);
		this.setState({commentForm: {title: "", note: 0, body: ""}})
	}

  render() {
  	return (
			<div>

				{!this.state.cookies &&
					<div id="cookieConsent">
						Ce site utilise des cookies.<a className="cookieConsentOK" onClick={this.handleCookieConsent} >Accepter</a>
					</div>
				}

				<div className="left-component">
					<h1 className="center title">CarConnect</h1>
					<hr />

					<div className="img-list">
						<Image src={productOne} alt="product-img" className="img-desc"/>
					</div>

					<div className="desc-text">
						<p>Nos équipes travaillent chaque jour afin d apporter le meilleur design et la plus grande discrétion à notre produit.</p>
						<p>Le tout en y proposant un maximum de fonctionnalités</p>
					</div>
				</div>

				<div className="right-component">
					<h3 className="center title">Toutes nos fonctionnalités</h3>
					<h5 className="center subtitle">Découvrez notre produit de A à Z</h5>
					<hr />

					<div className="fonc-list">

						<div className="icon-display">
							<button className="round-button">
								<FaCarCrash />
							</button>
							<div className="fonc-area">
								<h4 className="fonc-title">CarShock</h4>
								<p className="fonc-desc">Un détecteur de chocs</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<button className="round-button">
								<FaBell />
							</button>
							<div className="fonc-area">
								<h4 className="fonc-title">Notifications</h4>
								<p className="fonc-desc">Restez alerté</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<button className="round-button">
								<FaMapMarkerAlt />
							</button>
							<div className="fonc-area">
								<h4 className="fonc-title">Map</h4>
								<p className="fonc-desc">Sauvegardez vos positions</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<button className="round-button">
								<FaBatteryFull />
							</button>
							<div className="fonc-area">
								<h4 className="fonc-title">Batterie</h4>
								<p className="fonc-desc">Toujours prêt !</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<button className="round-button">
								<FaWrench />
							</button>
							<div className="fonc-area">
								<h4 className="fonc-title">Contrôle</h4>
								<p className="fonc-desc">Gérez votre véhicule</p>
							</div>
						</div>

					</div>

				</div>

				<div className="third-page">

					<h3 className="center title">Notre produit en vidéo</h3>
					<hr />

					<div className="center-item">
						<iframe type="text/html" title="youtube"
						  src="https://www.youtube.com/embed/DmUDns9OaeM?autoplay=1&origin=http://example.com"
						  className="ytb-player"></iframe>
					</div>

				</div>

				<div className="fourth-page">

					<h3 className="center title">Notre équipe</h3>
					<h5 className="center subtitle">Des experts dans leur domaine</h5>
					<hr />

					<div className="center-item">
						<img src={Team} alt="carConnectTeam" className="team-img" />
					</div>

					<h3 className="center title">Plus en détails</h3>
					<hr />

					<div className="display-team">

						<div className="card" onClick={(e) => this.changeText("Mohan")}>
						  <img src={Mohan} alt="Mohan" className="profile-img"/>
						</div>

						<div className="card" onClick={(e) => this.changeText("Loick")}>
							<img src={Loick} alt="Loïck" className="profile-img"/>
						</div>

						<div className="card" onClick={(e) => this.changeText("Thomas")}>
							<img src={Thomas} alt="Thomas" className="profile-img"/>
						</div>

						<div className="card" onClick={(e) => this.changeText("Sebastien")}>
							<img src={Sebastien} alt="Sébastien" className="profile-img"/>
						</div>

						<div className="card" onClick={(e) => this.changeText("Augustin")}>
							<img src={Augustin} alt="Augustin" className="profile-img"/>
						</div>

						<div className="card" onClick={(e) => this.changeText("Axel")}>
							<img src={Axel} alt="Axel" className="profile-img"/>
						</div>

					</div>

					<div className="center">
						<p><b>{this.state.name}</b></p>
						<h6 className="subtitle">{this.state.job}</h6>
					</div>

				</div>

				<div className="fifth-page">

					<h3 className="center title">Vos Avis</h3>
					<h5 className="center subtitle">Consulter les avis</h5>
					<hr />

					<div className="select">
						<div className="left-button-container">
							<button className={this.state.sort ? "left-button active-button" : "left-button"} onClick={this.handleSortChange}>Date</button>
							<button className={!this.state.sort ? "left-button active-button" : "left-button"} onClick={this.handleSortChange}>Note</button>
						</div>
						<div className="right-button-container">
							<button className={this.state.commentPerPage === 50 ? "right-button active-button" : "right-button"} onClick={this.handleNumberChange}>50</button>
							<button className={this.state.commentPerPage === 2 ? "right-button active-button" : "right-button"} onClick={this.handleNumberChange}>2</button>
							<button className={this.state.commentPerPage === 10 ? "right-button active-button" : "right-button"} onClick={this.handleNumberChange}>10</button>
						</div>
					</div>

					<div>
			      {this.state.comment.map((item, index) => (
							this.state.commentPerPage > index &&
							<div className="center-item" key={index}>
								<div className="card-comment">
									<span className="comment-title"><b>{item.title}</b></span>
									<span className="comment-note">{item.note}/5</span>
									<br /><br />
					        <p className="comment-body">{item.body}</p>
								</div>
							</div>
			      ))}
			    </div>

					<div>
						<nav className="pagination-outer" aria-label="Page navigation">
							<ul className="pagination">
									<li className="page-item">
											<a href="#" className="page-link" aria-label="Previous">
													<span aria-hidden="true">«</span>
											</a>
									</li>
									<li className="page-item active"><a className="page-link" href="#">1</a></li>
									<li className="page-item"><a className="page-link" href="#">2</a></li>
									<li className="page-item"><a className="page-link" href="#">3</a></li>
									<li className="page-item">
											<a href="#" className="page-link" aria-label="Next">
													<span aria-hidden="true">»</span>
											</a>
									</li>
							</ul>
						</nav>
					</div>
					<br />

					<div className="black-background">

						<h3 className="center title">Laissez un commentaire</h3>
						<hr />

						<form className="center-item">

							<ul>
								<li>
									<div className="note-star">
										<FaRegStar key={0} onClick={(e) => this.changeNote(0)} className={0 < this.state.commentForm.note ? "checked spacing" : "spacing"}/>
										<FaRegStar key={1} onClick={(e) => this.changeNote(1)} className={1 < this.state.commentForm.note ? "checked spacing" : "spacing"}/>
										<FaRegStar key={2} onClick={(e) => this.changeNote(2)} className={2 < this.state.commentForm.note ? "checked spacing" : "spacing"}/>
										<FaRegStar key={3} onClick={(e) => this.changeNote(3)} className={3 < this.state.commentForm.note ? "checked spacing" : "spacing"}/>
										<FaRegStar key={4} onClick={(e) => this.changeNote(4)} className={4 < this.state.commentForm.note ? "checked spacing" : "spacing"}/>
									</div>
								</li>
								<li>
									<input type="text" name="title" placeholder="Titre" className="form-title" value={this.state.commentForm.title} onChange={this.handleChange} />
								</li>
								<li>
									<textarea type="text" name="body" placeholder="Commentaire" className="form-body" value={this.state.commentForm.body} onChange={this.handleChange}/>
								</li>
								<li>
									<button className="form-button" onClick={this.postComment}>Valider</button>
								</li>
							</ul>

						</form>

					</div>

					<div className="white-background">
					<h3 className="center title">Nous Contacter</h3>
					<hr />

					<ul className="contact-icons">
						<li>
							<MdPhoneIphone /><a href="tel:+33684355629" className="contact-infos">+33 6 84 35 56 29</a>
						</li>
						<li>
							<MdEmail /><a href="mailto:carconnct@gmail.com" className="contact-infos">carconnect@gmail.com</a>
						</li>
					</ul>

					</div>

				</div>

			</div>
		)
  }
}

export default Home;
