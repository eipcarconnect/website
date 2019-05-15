import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppRouter from './Router';

import Menu from './components/menu.js'
import Contact from './components/contact.js'

function App() {
	return (
		<div>
			<Contact />
			<Menu />
			<AppRouter />
		</div>
	)
}

ReactDOM.render(
	<App />, document.getElementById('root')
);
