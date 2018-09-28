import React, {Component} from 'react';
import Image from 'react-image-resizer';

class About extends Component{
	render(){
		return(
		<div class=''>
			<div class='row'> 
				<div class="col s12" id='row-1'>
					
				</div>
    			</div>
		<div class='container'>
			<div class='row'> 
				
				<div class="col s12" align="center">
					
						<h2 align="center">About Us</h2>
						ALT (Apartment Locator) is a property app that allows users to
						advertise available land and homes for rent or sell (agent free),
						at the same time it also allows user to look for land and homes as
						well. So what makes us so special? Well ....
					
     				 </div>
     			</div>

			<div class='row'> 
				<div class="col s12">
				<h3 align="center">Our Features</h3>
				<div class="col s4">
					<Image src="images/look.png" width={200} height={200} alt="search icon"/>
        				<h4>Intelligent Filters</h4>
					A filter that to narrows the user’s search down and ensure their relevance.
     				 </div>
     				 <div class="col s4">
					<Image src="images/chat.png" width={200} height={200} alt="chat icon"/>
       					<h4>Connect To Users</h4>
					Contact the seller/buyer with just a tap. Call or message the advertisers
					instantly. 
      				</div>
      				<div class="col s4">
					<Image src="images/location.png" width={200} height={200} alt="loc icon"/>
        				<h4>Smart Integration</h4>
					Our App smartly locates properties that lie within your preferred locality
					and budget
     				 </div>
			</div>
    			</div>
		</div>
			
			
		</div>
	

        )
	}
	

}

export default About
