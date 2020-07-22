import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <div className="container bg-light">
		<nav className="nav nav-pills nav-fill text-capitalize text-bold">
			<Link className="nav-item nav-link" to="/">Home</Link>
			<Link className="nav-item nav-link" to="/about">About</Link>
	        <Link className="nav-item nav-link" to="/users">Users</Link>		      
	        <Link className="nav-item nav-link" to="/contact">Contact</Link>
		</nav>				
    </div>

  );
}

export default Navigation;
