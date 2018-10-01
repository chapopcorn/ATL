import React, {Component } from 'react';


class Contact extends Component {



	render(){
		return (
		
		<div class = "contact-pic">
  				 
      
 			<div class="row">
      				
      				<div id='contact' class="col s8 offset-s2 white">

					<h2 class="flow-text" id='center'align="center">Contacts Us</h2>
					
					<form class="col s12">
      					<div class="row">
						<div class="input-field col s6">
						  <i class="material-icons prefix">account_circle</i>
						  <input id="icon_prefix" type="text" class="validate"/>
						  <label for="icon_prefix">First Name</label>
						</div>
						<div class="input-field col s6">
						  <i class="material-icons prefix">email</i>
						  <input id="icon_email" type="email" class="validate"/>
						  <label for="icon_email">Email</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
						 <i class="material-icons prefix">mode_edit</i>
						 <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
						<label for="icon_prefix2">Message</label>
						</div>
					</div>
					<div class="row">
                          <div class="input-field col s12">
			    
                            <button class="btn-large light-blue lighten-1 waves-effect waves-light right" type="submit"
				 name="action">Send
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
