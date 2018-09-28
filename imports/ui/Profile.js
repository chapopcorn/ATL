import React, {Component } from 'react';
import Image from 'react-image-resizer';
import Footer from './Footer.js';



class Profile extends Component {

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
					 <button class="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">Settings
					    <i class="material-icons right">settings</i>
					  </button>
				  </div>
				  <div class="divider"></div>
   			</div>
				</div>
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
		<Footer/>
		</div>
		
		);

	}
};

export default Profile
