import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';


class Navbar extends Component{

	render(){


		return(
			<nav>
				<div className="nav-wrapper light-blue lighten-2">

				<div className="logo">
					<a href="/" className="brand-logo">
				 <img src="images/logo.png" className="circle responsive-img" width="42" height="42"/></a>
				 
				</div>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href='/'>Home</a></li>
					<li><a href='/about'>About</a></li>
					<li><a href='#'>Delete Account</a></li>
					<li><a href='/contact'>Contact</a></li>
					<li><a href='/login'>Log In</a></li>
					<li><a href='/signup'>Sign Up</a></li>
					</ul>
				</div>
			</nav>

		)
	}
}

export default Navbar
