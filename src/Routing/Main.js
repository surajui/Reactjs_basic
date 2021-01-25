import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Home from '../Component/Home';
import Notfound from '../Component/Notfound';
import EditUser from '../Users/Edituser';
import AddUser from '../Users/Adduser';
import Viewuser from '../Users/Viewuser';
const Main = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/adduser" component={AddUser} />
				<Route exact path="/adduser/:id" component={AddUser} />
				{/* <Route exact path="/edituser/:id" component={EditUser} /> */}
				<Route exact path="/view/:id" component={Viewuser} />
				<Route component={Notfound} />
			</Switch>
		</div>
	);
};
export default Main;
