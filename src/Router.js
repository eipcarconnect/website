import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home';
import Carshock from './components/carshock';
import Control from './components/control';
import Map from './components/map';

const AppRouter = () => (
    <Router>
        <div>
				<Route path="/" exact component={Home} />
				<Route path="/carshock" exact component={Carshock} />
				<Route path="/control" exact component={Control} />
				<Route path="/map" exact component={Map} />
        </div>
    </Router>
);

export default AppRouter;
