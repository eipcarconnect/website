import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home';
import Carshock from './components/carshock';
import Control from './components/control';
import Map from './components/map';
import Notifications from './components/notifications';
import Battery from './components/battery';

const AppRouter = () => (
    <Router>
        <div>
				<Route path="/" exact component={Home} />
				<Route path="/carshock" exact component={Carshock} />
				<Route path="/control" exact component={Control} />
				<Route path="/map" exact component={Map} />
				<Route path="/notifications" exact component={Notifications} />
				<Route path="/battery" exact component={Battery} />
        </div>
    </Router>
);

export default AppRouter;
