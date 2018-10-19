import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Footer from '../Footer.js';
import Property from '../../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../../api/collections/collections.js';

class Dashboard extends Component{

myLocation=()=>{
      const blog = this.props.blog;
      return blog.map((blog) => {
      const link = Images.findOne({'meta.key':blog.title}).link();
        return (
          <div key = {blog._id}>
	<div id="basic-card" class="section container">
                  
                  <div class="row">
                    
                    <div class="col s12">
                      <div class="row">
                        <div class="col s12">
                          <div class="card horizontal">

                            <div class="card-image width-65">
                              <img src={link} alt={blog.title} width={400} height={400}/>
                            </div>

                            <div class="card-stacked">
                              <div class="card-content">
				<h4 class="header" id ='blue'>{blog.title}</h4>
                                <h5 id ='bold'>K{blog.price}</h5>
				<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} for 
				sale in {blog.location}</p>
                                <p>{blog.description}
                                </p>
                                <p> Posted on: {blog.createdAt.toString()}
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
    };

newPage = (e, propertyId) => {
	e.preventDefault();
	Session.set('property', propertyId)
	FlowRouter.go('/viewproperty')
}

myLoc=()=>{
      const blog = this.props.blog;
      return blog.map((blog) => {
      const link = Images.findOne({'meta.key':blog.title}).link();
        return (
          <div key = {blog._id}>
      
	
     <div class="row">


    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src={link} alt={blog.title} />
        </div>
        <div class="card-content">
	<span class="card-title">{blog.title}</span>
		<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} 
		 for sale in {blog.location}</p>
<br/>
<br/>
        </div>
        <div class="card-action">
		<a class="waves-effect waves-light btn box-shadow light-blue lighten-1" 
		onClick={e => this.newPage(e, blog._id)}>View Property</a>
        </div>
      
    </div>


 		 </div>
            </div>
	</div>
        )
      }
    )
    };

myLinear=()=>{
      const blog = this.props.blog;
      return blog.map((blog) => {
      const link = Images.findOne({'meta.key':blog.title}).link();
        return (
          <div key = {blog._id}>


    	     <div class="row">
   		 <div class="col s4">
 			<img src={link} alt={blog.title} width={200} height={150}/>
 		 </div>

   		 <div class="col s8">
		<h5 id='blue'>{blog.title}</h5>
 		<p id ='bold'>{blog.bed} Bedroom {blog.bath} Bathroom {blog.type}  
		 to  {blog.forsale} in {blog.location}</p>
		<a class="waves-effect waves-light btn box-shadow light-blue lighten-1" 
		onClick={e => this.newPage(e, blog._id)}>View Property</a>
 		 </div>
            </div>

	</div>
        )
      }
    )
    };

	render(){
		return(
			<div>	
			   <div class="row">
	
			     <div class="col s12">
					<h4 class="header2" id='blue'>DASHBOARD</h4>
			      </div>
			    </div>
			   <div class="row">
	
			     <div class="col s12">
					{this.myLinear()}
			      </div>
			    </div>
			</div>
		);

	}
};
  
        

export default withTracker(() =>{
 Meteor.subscribe('blog');


userarea = () => {
	const area = Meteor.user().profile.area
	return(area);
}			

  return{
	blog: Property.find({location: userarea()}, {sort: {createdAt: -1}}).fetch(),
  }
})(Dashboard);

