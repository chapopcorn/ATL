import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Image from 'react-image-resizer';


class Navbar extends Component{

	render(){


		return(
			<div className ='navbar-default'>
		  <nav>
    	<div class="nav-wrapper light-blue lighten-2">
      		<a href="/" class="brand-logo">
			<img src="images/logo.png" className="circle responsive-img" id='nav-pic'width="42" height="42"/>
		</a>
		<ul id="nav-mobile" className="right hide-on-med-and-down">
			<li><a href='/about'>About</a></li>
			<li><a href='#'>Delete Account</a></li>
			<li><a href='/contact'>Contact</a></li>
			<li><a href='/login'>Log In</a></li>
			<li><a href='/signup'>Sign Up</a></li>
		</ul>
	</div>
  </nav>
			</div>
		)
	}
}

  
        

export default Navbar

