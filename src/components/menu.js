import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Media from 'react-media';

import Sidebar from "react-sidebar";

import 'bootstrap/dist/css/bootstrap.css';
import './menu.css'
import { IoMdHome } from 'react-icons/io';
import { IoMdMenu } from 'react-icons/io';

import logo from '../assets/aeo.png'

class Menu extends React.Component {

	constructor(props) {
  	super(props);
  	this.state = {
			openSidebar: false,
			location: window.location.pathname
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	onSetSidebarOpen(open) {
		if (open)
			document.getElementById("button").className = "menu-button menu-button-open"
		else
			document.getElementById("button").className = "menu-button"
		this.setState({ openSidebar: open });
	}

  render() {
  	return (
			<div>

				<Media query="(max-width: 991px)">
					<div>
						<Sidebar
						children=""
						sidebarClassName="sidebar"
						sidebar={<Side />}
						open={this.state.openSidebar}
						onSetOpen={this.onSetSidebarOpen}
						>
						</Sidebar>
						<Navbar className="navbar">
						<button id="button" onClick={() => this.onSetSidebarOpen(true)} className="menu-button">
						<IoMdMenu />
						</button>
							<Navbar.Brand>
								<Image src={logo} alt="aeo" className="logo"/>
							</Navbar.Brand>
						</Navbar>
					</div>
				</Media>

				<Media query="(min-width: 992px)">
					<Navbar bg="dark" variant="dark" className="navbar">
						<Navbar.Brand className="col-3 col-s-2">
							<Image src={logo} alt="aeo" className="logo"/>
						</Navbar.Brand>
						<Nav className="mr-auto col-9 col-s-10 right">
							<ul>
								<li><Nav.Link href="/home" className={(this.state.location === "/home") ? "active" : ""}><IoMdHome /></Nav.Link></li>
								<li><Nav.Link href="/presentation" className={(this.state.location === "/presentation") ? "active" : ""}>Présentation</Nav.Link></li>
								<li><Nav.Link href="/application" className={(this.state.location === "/application") ? "active" : ""}>Applications</Nav.Link></li>
								<li><Nav.Link href="/services" className={(this.state.location === "/services") ? "active" : ""}>Services</Nav.Link></li>
								<li><Nav.Link href="/contact" className={(this.state.location === "/contact") ? "active" : ""}>Contact</Nav.Link></li>
							</ul>
						</Nav>
					</Navbar>
				</Media>

			</div>
		)
  }
}

function Side() {
	return (
		<div>
			<div className="img-container">
				<Image src={logo} alt="eao" className="sidebar-logo"/>
			</div>
			<p className="sidebar-title">Accueil</p>
			<p className="sidebar-title">Présentation</p>
			<p className="sidebar-title">Applications</p>
			<p className="sidebar-title">Services</p>
			<p className="sidebar-title">Contact</p>
		</div>
	)
}

export default Menu;
