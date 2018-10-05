import React, {Component } from 'react';
import Image from 'react-image-resizer';
import Footer from './Footer.js';
import { Session } from 'meteor/session';
import route from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Property from '../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import FileUploadComponent from './Images.js';




class Add extends Component {

constructor(props){
     super(props);
      this.state = {title : "", location : "", type: "", bed: 0, bath: 0,  price: 0, description: ""}

}

handleTitle = (e) => {
		this.setState({
			title: e.target.value
		})
	}

handleLoc = (e) => {
		this.setState({
			location: e.target.value
		})
	}
handleType = (e) => {
		this.setState({
			type: e.target.value
		})
	}
handleBed = (e) => {
		
		this.setState({
			bed: e.target.value
		})
	}
handleBath = (e) => {
		this.setState({
			bath: e.target.value
		})
	}

handlePrice = (e) => {
		this.setState({
			price: e.target.value
		})
	}

handleDescription = (e) => {
		
		this.setState({
			description: e.target.value
		})
	}

         // self.setState({
            //uploading: [],
            //progress: 0,
            //inProgress: false
          //});


createProp =(e)=>{
	e.preventDefault();
	
	const title = this.state.title;
	const location = this.state.location;
	const description = this.state.description;
	const bed = this.state.bed;
	const bath = this.state.bath;
	const price = this.state.price;
	const type = this.state.type;
	

	const user = {
	title, location, type, description, bath, bed, price
	}
	Meteor.call('addProperty', user)

	
	alert('Property Added');
	
}

displayUser=()=>{
      const blog = this.props.blog;
      return blog.map((blog) => {
        return (
          <div key = {blog._id}>


<div id="basic-card" class="section">
                  
                  <div class="row">
                    
                    <div class="col s12">
                      <div class="row">
                        <div class="col s12">
                          <div class="card horizontal">
                            <div class="card-image width-65">
                              <img src="images/house.jpeg"/>
                            </div>
                            <div class="card-stacked">
                              <div class="card-content">
				<h4 class="header" id ='blue'>{blog.title}</h4>
                                <h5 id ='bold'>K{blog.price}</h5>
				<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} for 
				sale in {blog.location}</p>
                                <p>{blog.description}
                                </p>
                                <p> Posted on:{blog.createdAt.toString()}
                                </p>
                              </div>
                              <div class="card-action border-none">
                                <a class="waves-effect waves-light btn box-shadow light-blue lighten-1">Contact Owner</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        )
      }
    )
    }

	render(){
		return (
            <div class = "add-pic">
  				 
      
            <div class="row">
                     
                     <div id='contact' class="col s10 offset-s1 white">

                   <h2 class="flow-text" id='center'align="center">Add Property</h2>
		<form class="col s12" onSubmit={this.createProp}>
                   <div class="row">
                       <div class="input-field col s6">
                       <i class="material-icons prefix">home</i>
                         <input id="icon_prefix" type="text" class="validate" name='title' onChange={this.handleTitle}/>
                         <label for="icon_prefix">Title</label>
                       </div>
                       <div class="input-field col s6">
                       <i class="material-icons prefix">home</i>
                         <input id="icon_prefix" type="text" class="validate" name='type' onChange={this.handleType}/>
                         <label for="icon_prefix">Type</label>
                       </div>
                   </div>
                   <div class="row">
                       <div class="input-field col s6">
                       <i class="material-icons prefix">location_on</i>
                         <input id="icon_prefix" type="text" class="validate" name='location' onChange={this.handleLoc}/>
                         <label for="icon_prefix">Location</label>
                       </div>
		    <div class="file-field input-field col s6">
		      <div class="btn waves-effect waves-light light-blue lighten-1">
			<span>Image</span>
			<input type="file" name='image'/>
		      </div>
		      <div class="file-path-wrapper">
			<input class="file-path validate" type="text"/>
		      </div>
		    </div>
                       
                   </div>
                         <div class="row">
                       <div class="input-field col s4">
                         <i class="material-icons prefix">hotel</i>
                         <input id="icon_prefix" type="text" class="validate" name='bed' onChange={this.handleBed}/> 
                         <label for="icon_prefix">Bedrooms</label>
                       
                       </div>
                       <div class="input-field col s4">
                         <i class="material-icons prefix">airline_seat_legroom_normal</i>
                         <input id="icon_email" type="text" class="validate" name='bath' onChange={this.handleBath}/>
                         <label for="icon_email">Bathrooms</label>
                       </div>
                       <div class="input-field col s4">
                         <i class="material-icons prefix">attach_money</i>
                         <input id="icon_email" type="text" class="validate" name='price' onChange={this.handlePrice}/>
                         <label for="icon_email">Price</label>
                       </div>
                   </div>
                   <div class="row">
                       <div class="input-field col s12">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" class="materialize-textarea" name='description' onChange={this.handleDescription}></textarea>
                       <label for="icon_prefix2">Description</label>
                       </div>
                   </div>
                   <div class="row">
                         <div class="input-field col s12">

                 <button class="btn waves-effect waves-light light-blue lighten-1 right" 
               type="submit" name="action">Add
                       <i class="material-icons right">add</i>
               </button>
                         </div>
                       </div>
                       </form>

               </div>
               </div>
	<div class="row">
		  <div id='contact' class="col s12 white">
			<h2 class="header center">Latest Properties</h2>
			<FileUploadComponent/>
			<br/>
			<br/>
           		{this.displayUser()}
		</div>

	</div>
	<Footer/>
       </div>
           
		
		);

	}
};

export default withTracker(() =>{
    Meteor.subscribe('blog');
    return{
      blog : Property.find({}).fetch(),
    }
  })(Add);
