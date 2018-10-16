import React, {Component} from 'react';


class Stepper extends Component{

componentDidMount(){

	
}

	render(){
		return(
<div>
          <div class="row">
            <div class="col s5">
              <div class="card-panel">
                <div class="row">
                  
			 <img src="images/card.jpg" width={300} height={250} />
<br/>
<h4 class="header2">User Name</h4>
<p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
		<button class="btn waves-effect waves-light light-blue lighten-1" type="submit"
 name="action">
settings <i class="material-icons right">settings</i>
</button>

		<button class="btn waves-effect waves-light light-blue lighten-1" type="submit"
 name="action">
Log Out <i class="material-icons right">exit_to_app</i>
</button>
                </div>
              </div>
            </div>

      <div class="col s7">
	<h4 class="header2">Dashboard</h4>
		<p>Here is a list of properties close to your area</p>
     <div class="row">


    <div class="col s6">
      <div class="card">
        <div class="card-image">
          <img src="images/card.jpg"/>
        </div>
        <div class="card-content">
	<span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/viewproperty" id='blue'>View Property</a>
        </div>
      </div>
    </div>

    <div class="col s6">
      <div class="card">
        <div class="card-image">
          <img src="images/card.jpg"/>
        </div>
        <div class="card-content">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/viewproperty" id='blue'>View Property</a>
        </div>
      </div>
    </div>

  </div>
            </div>
          </div>

</div>

		)
	}
}

export default Stepper



