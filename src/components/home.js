import React, { createRef } from 'react';
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
			commentPerPage: 1,
			commentPage: 1,
			commentForm: {id: null, title: "", note: 0, body: "", parent: null},
			comment: [{id: 1, title: "Très satisfait", note: 4, body: "J'ai acheté ce produit et j'en suis vraiment très satisfait.", extend: false},
			{id: 2, title: "Je recommande", note: 3, body: "J'ai acheté ce produit et je le recommande vraiment à tout le monde.", extend: false},
			{id: 3, title: "Ravi", note: 5, body: "Un produit miracle pour jouer le garde du corps de mon véhicule.", extend: false}],
			response: [{id: 1, title: "ok", note: "4", body: "entièrement d'accord", parent: 1},
			{id: 2, title: "test", note: "3", body: "tout à fait", parent: 2}],
		}
		this.ref = createRef();
		this.handleCookieConsent = this.handleCookieConsent.bind(this);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleNumberChange = this.handleNumberChange.bind(this);
		this.changeText = this.changeText.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.changePage = this.changePage.bind(this);
		this.changeNote = this.changeNote.bind(this);
		this.postComment = this.postComment.bind(this);
		this.countResponses = this.countResponses.bind(this);
		this.showReponses = this.showReponses.bind(this);
		this.respondToComment = this.respondToComment.bind(this);
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
		if ((event.target.textContent === "3" && this.state.commentPerPage !== 3) ||
				(event.target.textContent === "2" && this.state.commentPerPage !== 2) ||
				(event.target.textContent === "1" && this.state.commentPerPage !== 1)) {
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

	changePage(page) {
		if (page > 0 && page <= 3)
		this.setState({commentPage: page});
	}

	changeNote(el) {
		this.setState({commentForm: {note: el + 1, title: this.state.commentForm.title, body: this.state.commentForm.body, parent: this.state.commentForm.parent}})
	}

	handleChange(event) {
		if (event.target.name === "title")
			this.setState({commentForm: {title: event.target.value, note: this.state.commentForm.note, body: this.state.commentForm.body, parent: this.state.commentForm.parent}})
		else if (event.target.name === "body")
			this.setState({commentForm: {body: event.target.value, note: this.state.commentForm.note, title: this.state.commentForm.title, parent: this.state.commentForm.parent}})
	}

	postComment(event) {
		event.preventDefault();
		if (this.state.commentForm.parent) {
			this.state.response.push({id: 10, title: this.state.commentForm.title, body: this.state.commentForm.body, note: this.state.commentForm.note, parent: this.state.commentForm.parent})
			var request = new XMLHttpRequest();
			request.open('POST', '/responses', true);
			request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
			request.send(this.state.response);
		} else {
			this.state.comment.push({id: 10, title: this.state.commentForm.title, body: this.state.commentForm.body, note: this.state.commentForm.note, parent: null})
			var request = new XMLHttpRequest();
			request.open('POST', 'https://prod-betwfriends-api.herokuapp.com/api/v1/comments', true);
			request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
			request.send(JSON.stringify(this.state.comment[this.state.comment.length - 1]));
		}
		this.setState({commentForm: {title: "", note: 0, body: "", parent: null}})
	}

	countResponses(index) {
		return (
			<span> Voir les ({this.state.response.filter(x => x.parent === this.state.comment[index].id).length}) réponses</span>
		);
	}

	respondToComment(index) {
		this.ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		this.state.commentForm.parent = this.state.comment[index].id;
		this.forceUpdate()
	}

	showReponses(index) {
		this.state.comment[index].extend = !this.state.comment[index].extend
		this.forceUpdate()
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
							<a href="carshock"><button className="round-button">
								<FaCarCrash />
							</button></a>
							<div className="fonc-area">
								<h4 className="fonc-title">CarShock</h4>
								<p className="fonc-desc">Un détecteur de chocs</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<a href="notifications"><button className="round-button">
								<FaBell />
							</button></a>
							<div className="fonc-area">
								<h4 className="fonc-title">Notifications</h4>
								<p className="fonc-desc">Restez alerté</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<a href="map"><button className="round-button">
								<FaMapMarkerAlt />
							</button></a>
							<div className="fonc-area">
								<h4 className="fonc-title">Map</h4>
								<p className="fonc-desc">Sauvegardez vos positions</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<a href="battery"><button className="round-button">
								<FaBatteryFull />
							</button></a>
							<div className="fonc-area">
								<h4 className="fonc-title">Batterie</h4>
								<p className="fonc-desc">Toujours prêt !</p>
							</div>
						</div>
						<br />

						<div className="icon-display">
							<a href="control"><button className="round-button">
								<FaWrench />
							</button></a>
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
							<button className={this.state.commentPerPage === 3 ? "right-button active-button" : "right-button"} onClick={this.handleNumberChange}>3</button>
							<button className={this.state.commentPerPage === 2 ? "right-button active-button" : "right-button"} onClick={this.handleNumberChange}>2</button>
							<button className={this.state.commentPerPage === 1 ? "right-button active-button" : "right-button"} onClick={this.handleNumberChange}>1</button>
						</div>
					</div>

					<div>
						{this.state.comment.map((item, index) => (
							this.state.commentPerPage * this.state.commentPage - this.state.commentPerPage <= index && index < this.state.commentPerPage * this.state.commentPage &&
							<div key={index}>
								<div className="center-item">
									<div className="card-comment" onClick={(e) => this.respondToComment(index)}>
										<span className="comment-title"><b>{item.title}</b></span>
										<span className="comment-note">{item.note}/5</span>
										<br /><br />
						        <p className="comment-body">{item.body}</p>
									</div>
								</div>

								<div className="extend" onClick={(e) => this.showReponses(index)}>
									{this.countResponses(index)}
								</div>

								<div>
									{this.state.response.map((el, i) => (
										el.parent === item.id && item.extend &&
										<div className="center-item" key={i}>
											<div className="card-response">
												<span className="comment-title"><b>{el.title}</b></span>
												<span className="comment-note">{el.note}/5</span>
												<br /><br />
												<p className="comment-body">{el.body}</p>
											</div>
										</div>
									))}
								</div>
							</div>
			      ))}
			    </div>

					<div>
						<nav className="pagination-outer" aria-label="Page navigation">
							<ul className="pagination">
									<li className="page-item" onClick={(e) => this.changePage(this.state.commentPage - 1)}>
											<a className="page-link" aria-label="Previous">
													<span aria-hidden="true">«</span>
											</a>
									</li>
									<li className={this.state.commentPage === 1 ? 'page-item active' : 'page-item'} onClick={(e) => this.changePage(1)}><a className="page-link">1</a></li>
									<li className={this.state.commentPage === 2 ? 'page-item active' : 'page-item'} onClick={(e) => this.changePage(2)}><a className="page-link">2</a></li>
									<li className={this.state.commentPage === 3 ? 'page-item active' : 'page-item'} onClick={(e) => this.changePage(3)}><a className="page-link">3</a></li>
									<li className="page-item" onClick={(e) => this.changePage(this.state.commentPage + 1)}>
											<a className="page-link" aria-label="Next">
													<span aria-hidden="true">»</span>
											</a>
									</li>
							</ul>
						</nav>
					</div>
					<br />

					<div className="black-background">

						<h3 className="center title" ref={this.ref}>Laissez un commentaire</h3>
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
