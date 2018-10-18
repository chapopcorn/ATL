import React, {Component} from 'react';
import Image from 'react-image-resizer';
import Footer from './Footer.js';

class About extends Component{

componentDidMount(){

$(document).ready(function(){
    $('.carousel').carousel();
  });

$('.carousel.carousel-slider').carousel({fullWidth: true});
}

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
<div class="divider"></div>
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

<div class="divider"></div>
			<div class='row'> 
				<div class="col s12">
				<h3 align="center">Meet The Team</h3>
				At we are dedicated to providing a service that helps our community. Meet the team that put this website togethert. ALT (Apartment Locator) is a property app that allows users to
				advertise available land and homes for rent or sell (agent free),
				at the same time it also allows user to look for land and homes as.
			</div>

    			</div>
 		
                <div id="card-reveal" class="section">
                  <div class="row">
                    <div class="col s12">
                    </div>
                    <div class="col s12">
                      <div class="row">
                        <div class="col s12 m4">
                          <div class="card">
                            <div class="card-image">
                              <img src="images/emma.png"/>
                              <a class="btn-floating halfway-fab waves-effect waves-light blue left"
			 href='https://github.com/chapopcorn'>
                                <i class="material-icons">share</i>
                              </a>
                            </div>
                            <div class="card-content">
                              <h5 class="center font-weight-400">JACKIE CHAPOLOKO</h5>
                              <p class="center">Front-End Developer</p>
                              <div></div>
                              
                            </div>
                          </div>
                        </div>
                        <div class="col s12 m4">
                          <div class="card">
                            <div class="card-image">
                              <img src="images/piter.png"/>
                              <a class="btn-floating halfway-fab waves-effect waves-light red left"
				href='https://github.com/alvinmwewa'>
                                <i class="material-icons">share</i>
                              </a>
                            </div>
                            <div class="card-content">
                              <h5 class="center font-weight-400">ALVIN <br/>MWEWA</h5>
                              <p class="center">Developer</p>
                              <div ></div>
                            </div>
                          </div>
                        </div>
                        <div class="col s12 m4">
                          <div class="card">
                            <div class="card-image">
                              <img src="images/charlotte.png"/>
                              <a class="btn-floating halfway-fab waves-effect waves-light red left"
				href='https://github.com/chapopcorn'>
                                <i class="material-icons">share</i>
                              </a>
                            </div>
                            <div class="card-content">
                              <h5 class="center font-weight-400">GRACE <br/>BANDA</h5>
                              <p class="center">Developer</p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

		
		</div>
		<Footer/> 	
		</div>
	

        )
	}
	

}

export default About
