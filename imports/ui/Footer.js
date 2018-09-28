import React, {Component} from 'react';

class Footer extends Component{

	render(){
		return(
			<div>
		<div class='row'>
				<div class="col s12">
					
				</div>
		</div>
			<footer class="page-footer light-blue lighten-1">
			  <div class="container">
			    <div class="row">
			      <div class="col l6 s12">
				<h5 class="white-text">ATL (Apartment Locator)</h5>
				<p class="grey-text text-lighten-4">
					We are a property app that allows users to
					advertise available land and homes for rent or sell (agent free),
					at the same time it also allows user to look for land and homes as
					well.
				</p>
			      </div>
			      <div class="col l4 offset-l2 s12">
				<h5 class="white-text">Navigation</h5>
				<ul>
				  <li><a class="grey-text text-lighten-3" href='/about'>About</a></li>
				  <li><a class="grey-text text-lighten-3" href='/contact'>Contact</a></li>
				  <li><a class="grey-text text-lighten-3" href='/login'>Login</a></li>
				  <li><a class="grey-text text-lighten-3" href='/signup'>Sign Up</a></li>
				</ul>
			      </div>
			    </div>
			  </div>
			  <div class="footer-copyright">
			    <div class="container">
			    © 2018 Copyright Apartment Locator
			    <a class="grey-text text-lighten-4 right" href='/'>ATL</a>
			    </div>
			  </div>
			</footer>
			</div>

		)
	}
}

export default Footer
