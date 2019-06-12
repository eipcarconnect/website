import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppRouter from './Router';

function App() {
	return (
		<div>
			<AppRouter />
		</div>
	)
}

ReactDOM.render(
	<App />, document.getElementById('root')
);
