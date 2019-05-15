import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home';
import Mail from './components/mail';

const AppRouter = () => (
    <Router>
        <div>
					<Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Mail} />
        </div>
    </Router>
);

export default AppRouter;
