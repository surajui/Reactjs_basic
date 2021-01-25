import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-primary">
			<a className="navbar-brand" href="#">
				React Curd
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/about">
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/contact">
							Contact
						</NavLink>
					</li>
				</ul>

				<Link className="btn btn-outline-light" to="/adduser">
					AddUser
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
