import React from "react";
import { NavLink, Outlet } from "react-router-dom";



function App() {
	return (
		<>
			<div>
				<nav className="navbar navbar-dark bg-dark justify-content-center">
					<NavLink to="/films" className="nav-link">Films</NavLink>
					<NavLink to="/todo" className="nav-link">ToDo</NavLink>
				</nav>
			</div>
			<div className="container-sm">
				<Outlet />
			</div>
		</>
	);
}

export default App;