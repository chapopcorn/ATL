import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Image from 'react-image-resizer';
import { withTracker } from 'meteor/react-meteor-data';
import {ProfileImages} from '../api/collections/collections.js';


class Navbar2 extends Component{


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

username = () => {
	if (Meteor.user()){
	const name = Meteor.user().profile.name
	console.log(name)
	return(name);

		}
	}

useremail = () => {
	if (Meteor.user()){
	const email = Meteor.user().profile.email
	return(email);
			}
		}

	userlink = () => {
		if (Meteor.user()){
				const link = ProfileImages.findOne({'meta.key':this.useremail()}).link();
				return(link);
			}
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
				<li><a href="/" onClick={e =>this.logoutUser(e)}>Logout</a></li>
      			  </ul>

			  <ul className="side-nav" id='slide-out'>

			    <li><div className="user-view">
			      <a href="/profile"><img className="circle" src={this.userlink()}/></a>
			      <a href="/"><span className="name">Hi, {this.username()}</span></a>
			      <a href="/"><span className="email">{this.useremail()}</span></a>
			    </div></li>

			    <li><a href="/" className="waves-effect">Home</a></li>
			    <li><a href='/about' className="waves-effect">About</a></li>
			    <li><a href='/contact' className="waves-effect">Contact</a></li>
			    <li><a href='/search' className="waves-effect">Search</a></li>

			    <li><div className="divider"></div></li>

			    <li><a href='/profile' className="waves-effect waves-light">Profile</a></li>
			    <li><a href='/addproperty' className="waves-effect">Add property</a></li>
                            <li><a href='/' onClick={e =>this.logoutUser(e)}
				className="waves-effect waves-light">Logout</a></li>

			  </ul>

			  <a data-activates="slide-out" className="sidenav-trigger light-blue lighten-2" href="#!">
			    <i className="material-icons">menu</i>
			  </a>
			</nav>
			</div>


		)
	}

}


export default withTracker(() =>{
  return {
    user: Meteor.user()
  };
})(Navbar2);
