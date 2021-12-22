import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { loadLists } from './store/actions';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadLists());
	}, []);

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