import React, {Component } from 'react';
import Footer from './Footer.js';

class Home extends Component {

	render(){
	return (
		<div>
		<div className="Home">
			<img src="images/lusaka.jpg"/>
		
		</div>

		<div class="container">
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

			<Footer/>
		</div>

	)
	}
}

export default Home
