import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import route from 'react-router-dom';


class Contact extends Component {

constructor(props){
     super(props);
      this.state = {
	name : "", 
	email : "", 
	message: ""
	}

}


handleName = (e) => {
		this.setState({
			name: e.target.value
		})
	}

handleEmail = (e) => {
		this.setState({
			email: e.target.value
		})
	}

handleMessage = (e) => {
		this.setState({
			message: e.target.value
		})
	}

addComment =(e)=>{
	e.preventDefault();
	
	const name = this.state.name;
	const email = this.state.email;
	const message = this.state.message;


	const user = {
	name, email, message
	}
	Meteor.call('addComment', user)

	
	alert('Thanks for Your Comment');
	
}

	render(){
		return (
		
		<div class = "contact-pic">
  				 
      
 			<div class="row">
      				
      				<div id='contact' class="col s8 offset-s2 white">

					<h2 class="flow-text" id='center'align="center">Contacts Us</h2>
					
					<form class="col s12" onSubmit={this.addComment}>
      					<div class="row">
						<div class="input-field col s6">
						  <i class="material-icons prefix">account_circle</i>
						  <input id="icon_prefix" type="text" class="validate"
						  name='name' onChange={this.handleName}/>
						  <label for="icon_prefix">Full Name</label>
						</div>
						<div class="input-field col s6">
						  <i class="material-icons prefix">email</i>
						  <input id="icon_email" type="email" class="validate"
						  name='email' onChange={this.handleEmail}/>
						  <label for="icon_email">Email</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
						 <i class="material-icons prefix">mode_edit</i>
						 <textarea id="icon_prefix2" class="materialize-textarea" 
						 name='message' onChange={this.handleMessage}></textarea>
						<label for="icon_prefix2">Message</label>
						</div>
					</div>
					<div class="row">
                          <div class="input-field col s12">

			  	<button class="btn waves-effect waves-light light-blue lighten-1 right" 
				type="submit" name="action">Send
					    <i class="material-icons right">send</i>
				</button>
                          </div>
                        </div>
    					</form>
				</div>
    			</div>
            
		</div>
			
							
		
		);

	}
};

export default Contact
