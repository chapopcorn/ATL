import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import Footer from '../Footer.js';



class Login extends React.Component{

	loginUser = e => {
	  e.preventDefault();
	  const {target} = e;
	  const password = target.password.value;
	  const email = target.email.value;

	  Meteor.loginWithPassword(email,password,(err) => {
	    if (err) {
	      console.log(error.reason);
	      }
	      else {
	        FlowRouter.go('/')
	      }
	    }
	  );
	}


	render(){
		return(
			<div>

			<div className="row">
					<div className="col s6">
					<br/>
					<br/>
					<div className="center">
					<img src="images/logo.png" className="circle responsive-img"/>
				<h5 id="blue"> With ATL  you can login online anywhere anytime on more
				than just one device </h5>
				<img src="images/laptop-tablet-phone-pc.png"/>
				</div>
					<br/>
					<br/>
					</div>
					 <div className="col s6">
					 <h2 className="H4" id='blue'>Login</h2>
	 				 <form onSubmit={this.loginUser}>
	 					 <div className="row">
	 						 <div className="input-feild s12 l6">
	 							 <input id="email" type="text" className="input" name="email"/>
	 							 <label htmlFor="email">Email</label>
	 							 <div className="row">
	 								 <div className="input-feild s12 l6">
	 									 <input id="password" type="password" className="input" name="password" required/>
	 									 <label htmlFor="password">Password</label>
	 								 </div>
	 							 </div>
	 						 </div>
	 					 </div>
	 					  <button className="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">L o g i n</button>

	 					 <p><a href="#">Forgot your password?</a> | <a href="/signup">Dont have an account?</a></p>
	 					 <hr/>
	 					 <p> You can also use your preferred social account to access ATL</p>
	 					 <p>
	 					 <a href="#" className="fa fa-facebook">facebook</a>
	 					 <a href="#" className="fa fa-google">Google</a></p>
	 				 </form>
					</div>
					<br/>
					<br/>
			</div>
				 <Footer/>
			</div>
		);
	}

}

export default Login;
