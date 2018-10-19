import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Notfound from './Notfound.js';
import Navbar from './Navbar.js';
import Navbar2 from './NavbarLoggedin.js';

class App extends Component{
	logoutUser = (e) => {
	e.preventDefault();
	Meteor.logout((err) => {
		if (err){
			console.log(err.reason);
		}
		else {
			FlowRouter.go('/')
		}
	}
	)
}



	render(){
	let navigate;

        if(Meteor.userId())
          navigate=<Navbar2 />;
        else
          navigate=<Navbar />
		return(
			<div>
            <header className="main-header">
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-custom-menu">
                        {navigate}
                    </div>
                </nav>
            </header>

			</div>

		)
	}
}

export default App
