import React, {Component } from 'react';
import Image from 'react-image-resizer';



class Profile extends Component {



	render(){
		return (
	
	
 <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <Image src='images/user.png' alt="Logo" width={250} height={250}/>
        </div>
        <div class="card-content">
          <p>User information. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
		
		);

	}
};

export default Profile
