import React, {Component } from 'react';
import Image from 'react-image-resizer';
import Footer from './Footer.js';



class Profile extends Component {

componentDidMount() {

$(document).ready(function(){
    $('.tabs').tabs();
  });

}

	render(){
		return (
		<div>
		<div class='row'>
				<div class="col s12">
					
				</div>
		</div>
		<div class="row">
			<div class="col s4" id='user-pic'>
			      <Image src="images/user.png" width={300} height={300} alt="" 
				class="circle responsive-img"/>
			 </div>
			    
			<div class="col s8">
				  <div class="section" id='user-info'>
				    <h5 id='blue'>User Name</h5>
				    
					Buyer | Seller<br/>
					Lusaka, Zambia<br/> 
					+26 123 456 789<br/> 
				    	<br/>
					 <button class="btn waves-effect waves-light light-blue lighten-1"
						type="submit" name="action">Settings
					    <i class="material-icons right">settings</i>
					  </button>
					 <button class="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">Add Property
					    <i class="material-icons right">home</i>
					  </button>
					 
				  </div>
				  <div class="divider"></div>
   			</div>
				</div>
				
	<div class='container'>
		  <div class="row">
		    <div class="col s12">
		      <ul class="tabs">
			<li class="tab col s3"><a class="active" href="#inbox">INBOX
			<i class="material-icons">message</i>
			</a></li>
			<li class="tab col s3"><a href="#properties">MY PROPERTIES
			<i class="material-icons">home</i>
			</a></li>
			<li class="tab col s3"><a href="#test4">SETTINGS
			<i class="material-icons">settings</i>
			</a></li>
		      </ul>
		    </div>
    			<div id="inbox" class="col s12">
			<div class='row'>
				<div class="col s12">
				<h2 id='blue'>Inbox</h2>
				  <div class="section">
				    <h5>Message 1</h5>
				    <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				    </p>
				  </div>
				  <div class="divider"></div>
				  <div class="section">
				    <h5>Message 2</h5>
				    <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				    </p>
				  </div>
				  <div class="divider"></div>
				  <div class="section">
				    <h5>Message 3</h5>
				    <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				    </p>
				  </div>
			
				</div>
		</div>
	</div>
	   	 <div id="properties" class="col s12">
			<h2 id='blue'>My Properties</h2>

			<div class="row">
				<div class="col s4">
					<img src="images/house.svg"/>
				</div>

				<div class="col s8">
					<h2>Lorem ipsum dolor</h2>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				    	</p>
				</div>
			</div>
			<div class="row">
				<div class="col s4">
					<img src="images/house.svg"/>
				</div>

				<div class="col s8">
					<h2>Lorem ipsum dolor</h2>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				    	</p>
				</div>
			</div>
			<div class="row">
				<div class="col s4">
					<img src="images/house.svg"/>
				</div>

				<div class="col s8">
					<h2>Lorem ipsum dolor</h2>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				    	</p>
				</div>
			</div>

		</div>
	    <div id="test4" class="col s12"><h2 id='blue'>Settings</h2></div>
	  </div>
	</div>
		<Footer/>
		</div>
		
		);

	}
};

export default Profile
