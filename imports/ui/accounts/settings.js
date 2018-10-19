import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Footer from '../Footer.js';
import Property from '../../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../../api/collections/collections.js';

class Settings extends Component{
	constructor(props){
		super(props);
		 this.state = { profilePic : null}
   
   }
   
   handleImages = (e) => {
		   
		   this.setState({
			   profilePic: e.target.files[0]
		   })
	   }
	
	render(){
		return(
			<div>	
			   <div class="row">
	
			     <div class="col s12">
					<h4 class="header2" id='blue'>Settings</h4>
					<button class="btn waves-effect waves-light light-blue lighten-1" 
					type="submit" name="action">
					Delete <i class="material-icons right">close</i>
					</button>
					<div className="file-field input-field">
      <div className="btn waves-effect waves-light light-blue lighten-1">
        <span   type="file" name='profilePic' onChange={this.handleImages}>update Picture</span>
    
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
 </div>
			      </div>
			    
			</div>
		</div>
		);

	}
};
  
        

export default Settings
