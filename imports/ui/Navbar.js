import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Image from 'react-image-resizer';


class Navbar extends Component{

componentDidMount(){
  $(document).ready(function(){

	$('.sidenav-trigger').sideNav({
	      menuWidth: 300,
	      edge: 'left',
	      closeOnClick: true
	    }
	  );

  });


}

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

deleteAcc(){
    const userId= this._id;
    Meteor.call('deleteUserAcount',{_id:userId});
    FlowRouter.go('/');
  }



	render(){

		return(

			<div>
				

			<nav className="light-blue lighten-2 nav-wrapper">


			  <a href="/" className="brand-logo center" id='nav-content'>
				<img src="images/logo.png" className="circle responsive-img"
			  	id='nav-pic'width="42" height="42"/>
			  </a>
			  <ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><a href="/login">Login</a></li>
				<li><a href="/signup">Signup</a></li>
      			  </ul>

			  <ul class="side-nav" id='slide-out'>
			    <li><a href="/" class="waves-effect">Home</a></li>
			    <li><a href='/about' class="waves-effect">About</a></li>
			    <li><a href='/contact' class="waves-effect">Contact</a></li>
			    <li><a href='/search' class="waves-effect">Search</a></li>
			    <li><div class="divider"></div></li>
			    <li><a href='/profile' class="waves-effect waves-light">Profile</a></li>
			    <li><a href='/addproperty' class="waves-effect">Add property</a></li>
                            <li><a href='/' onClick={e =>this.logoutUser(e)} class="waves-effect waves-light">Logout</a></li>
			    <li><a href="#"  onClick={this.deleteAcc()}>Delete Account</a></li>

			  </ul>

			  <a data-activates="slide-out" className="sidenav-trigger light-blue lighten-2" href="#!">
			    <i className="material-icons">menu</i>
			  </a>
			</nav>
			</div>


		)
	}
}



export default Navbar
