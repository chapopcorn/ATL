import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-resizer';
import Footer from './Footer.js';
import { Session } from 'meteor/session';
import route from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Property from '../api/collections/collections.js';
import { Images } from '../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';



class Add extends Component {

componentDidMount(){
  var element = ReactDOM.findDOMNode(this.refs.dropdown)

  $(element).ready(function() {
  $('select').material_select();
  	});
	
}

constructor(props){
     super(props);
      this.state = {title : "", location : "", type: '', bed: 0, bath: 0,  price: 0, description: "", forsale: '', imagesFile : null}

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
	console.log(this.state.type);
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



handleForSale = (e) => {

        this.setState({
            forsale: e.target.value
        })
	
}

handleImages = (e) => {
		
		this.setState({
			imagesFile: e.target.files[0]
		})
	}


createProp =(e)=>{
	e.preventDefault();
	const { imagesFile } = this.state;
	const title = this.state.title;
	const location = this.state.location;
	const description = this.state.description;
	const bed = this.state.bed;
	const bath = this.state.bath;
	const price = this.state.price;
	const type = this.state.type;
	const forsale = this.state.forsale; 

	let uploadInstance;
	
	if (imagesFile) {
         uploadInstance = Images.insert({
          file: imagesFile,
          meta: {
            userId: Meteor.userId(),
	    key: title
          },
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true
        }, false);
 

        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error)
        });
 	uploadInstance.on('start', function ( fileObj) {
          console.log('startinnnnng during upload: ' + fileObj)
        });
 	uploadInstance.on('uploaded', function ( fileObj) {
          console.log('file has been uploaded: ' + fileObj)
        });

       uploadInstance.start(); 
    }

	const user = {
	title, location, type, description, bath, bed, price, forsale
	}
	Meteor.call('addProperty', user)

	
	alert('Property Added');
	
}





	displayUser=()=>{	
	      	const blog = this.props.blog;
	      	return blog.map((blog) => {
		const link = Images.findOne({'meta.key':blog.title}).link();
			return (
		  <div key = {blog._id}>


			<div id="basic-card" className="section">
		          
		          <div className="row">
		            
		            <div className="col s12">
		              <div className="row">
		                <div className="col s12">
		                  <div className="card horizontal">
		                    <div className="card-image width-65">
		                      <img src={link} alt={blog.title} width={400} height={400}/>
		                    </div>
		                    <div className="card-stacked">
		                      <div className="card-content">
					<h4 className="header" id ='blue'>{blog.title}</h4>
		                        <h5 id ='bold'>ZMW {blog.price}</h5>
					<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} for {blog.forsale} in {blog.location}</p>
		                        <p>{blog.description}
		                        </p>
		                        <p> Posted on:{blog.createdAt.toString()}
		                        </p>
		                        <p> Posted By:
		                        </p>
		                      </div>
		                      <div className="card-action border-none">
		                        <a className="waves-effect waves-light btn box-shadow light-blue lighten-1">Contact Owner</a>
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
            <div className="add-pic">
  				 
      
            <div className="row">  
                <div id='contact' className="col s10 offset-s1 white">
                <h2 className="flow-text" id='center'align="center">Add Property</h2>
		<form className="col s12" onSubmit={this.createProp}>
                   <div className="row">

                       <div className="input-field col s10">
                       <i className="material-icons prefix">home</i>
                         <input id="icon_prefix" type="text" className="validate" name='title' onChange={this.handleTitle}/>
                         <label for="icon_prefix">Title</label>
                       </div>

			  <div className="file-field input-field col s2">
		      <div className="btn waves-effect waves-light light-blue lighten-1">
			<span>Image</span>
			<input type="file" name='imagesFile' onChange={this.handleImages}/>
		      </div>
		    </div>
                   </div>

                   <div className="row">

                       <div class="input-field col s4">
                       <i class="material-icons prefix">location_on</i>
                         <input id="icon_prefix" type="text" class="validate" name='location' onChange={this.handleLoc}/>
                         <label for="icon_prefix">Location</label>
                       </div>

		    <div class="file-field input-field col s4">
 			<i class="material-icons prefix">home</i>
                         <input id="icon_prefix" type="text" class="validate" name='forsale' onChange={this.handleForSale}/>
                         <label for="icon_prefix">For Sale or Rent</label>
			  
		    </div>

		   
			 <div class="input-field col s4">
 			   <i class="material-icons prefix">home</i>
                           <input id="icon_prefix" type="text" class="validate" name='type' onChange={this.handleType}/>
                           <label for="icon_prefix">Type of home</label>

			  </div>
                       
                   </div>
                         <div class="row">
                       <div class="input-field col s4">
                         <i class="material-icons prefix">hotel</i>
                         <input id="icon_prefix" type="text" class="validate" name='bed' onChange={this.handleBed}/> 
                         <label for="icon_prefix">Bedrooms</label>
                       
                       </div>
                       <div class="input-field col s4">
                         <i class="material-icons prefix">home</i>
                         <input id="icon_email" type="text" class="validate" name='bath' onChange={this.handleBath}/>
                         <label>Bathrooms</label>
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
    Meteor.subscribe('images');
    return{

      blog : Property.find({}, {sort: {createdAt: -1}}).fetch(),
    }
  })(Add);
