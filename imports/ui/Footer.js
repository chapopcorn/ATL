import React, {Component} from 'react';

class Footer extends Component{

	render(){
		return(
			<div>
		<div className='row'>
				<div className="col s12">

				</div>
		</div>
			<footer className="page-footer light-blue lighten-1">
			  <div className="container">
			    <div className="row">
			      <div className="col l6 s12">
				<h5 className="white-text">ATL (Apartment Locator)</h5>
				<p className="grey-text text-lighten-4">
					We are a property app that allows users to
					advertise available land and homes for rent or sell (agent free),
					at the same time it also allows user to look for land and homes as
					well.
				</p>
			      </div>
			      <div className="col l4 offset-l2 s12">
				<h5 className="white-text">Navigation</h5>
				<ul>
				  <li><a className="grey-text text-lighten-3" href='/about'>About</a></li>
				  <li><a className="grey-text text-lighten-3" href='/contact'>Contact</a></li>
				  <li><a className="grey-text text-lighten-3" href='/login'>Login</a></li>
				  <li><a className="grey-text text-lighten-3" href='/signup'>Sign Up</a></li>
				</ul>
			      </div>
			    </div>
			  </div>
			  <div className="footer-copyright">
			    <div className="container">
			    © 2018 Copyright Apartment Locator
			    <a className="grey-text text-lighten-4 right" href='/'>ATL</a>
			    </div>
			  </div>
			</footer>
			</div>

		)
	}
}

export default Footer
