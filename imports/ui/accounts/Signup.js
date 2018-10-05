import React, {Component } from 'react';
import {meteor} from 'meteor/meteor';
import Footer from '../Footer.js';

class Signup extends React.Component{
	newUser = e =>{
	     e.preventDefault()
	     const {target} = e;
	     const name = target.name.value
	      const password= target.password.value
	       const email= target.email.value
				 const surname = target.surname.value
				 const city = target.city.value
	        const profile = {
	          email,
	          name,
						surname,
						city,
	        };
	        const user = {
	          email,password,
	          profile,
	        }

	        Accounts.createUser(user, (err) =>{
	          if (err)
	          {
	            console.log(err.reason);
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
					<h1 id="blue">ALT</h1>
						<div className="center">
					<img src="images/logo.png" className="circle responsive-img"/>
					<h5 id="blue">ATL(Apartment Locator) helps  you to communicate with buyers or sellers
					on esy access great prices and great services .Sign Up today</h5>
					<img src="images/family.jpg"/>
					</div>
					</div>
					 <div className="col s6">
					 <h1>Sign Up</h1>


							 <form onSubmit={this.newUser}>
								 <div className="row">
									 <div className="input-feild s6 l6">
										 <input id="name" type="text" className="input" name="name"/>
										 <label htmlFor="name">Name</label>
									 </div>
									 <div className="input-feild s6 l6">
										 <input id="surname" type="text" className="input" name="surname"/>
										 <label htmlFor="surname">Surname</label>
									 </div>
								 </div>

								 <div className="input-feild s6 l6">
									 <input id="city" type="text" className="input" name="city"/>
									 <label htmlFor="city">City</label>
								 </div>
								 <div className="row">
									 <div className="input-feild s12 l6">
										 <input id="email" type="text" className="input" name="email"/>
										 <label htmlFor="email">Email</label>
										 <div className="row">
											 <div className="input-feild s12 l6">
												 <input id="password" type="password" className="input" name="password"/>
												 <label htmlFor="password">Password</label>
											 </div>
										 </div>
									 </div>
								 </div>
								 <button className="btn waves-effect waves-light light-blue lighten-1" type="submit"
								  name="action">S i g n U p</button>
								 <hr/>
							 </form><p>| <a href="/login">  already have an account</a></p>
					</div>
			</div>
				<Footer/>
			</div>
		);
	}

}

export default Signup;
