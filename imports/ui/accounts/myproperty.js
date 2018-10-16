import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Footer from '../Footer.js';
import Property from '../../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../../api/collections/collections.js';

class Myproperty extends Component{

myProperty=()=>{
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

	render(){
		return(
			<div>
				<h2 id='blue'>My Properties</h2>	
				{this.myProperty()}
			</div>
		);

	}
};
  
        

export default withTracker(() =>{
 Meteor.subscribe('blog');


userid = () => {
		
	const myid = Meteor.user()._id
	return(myid);
		
}			

  return{
	blog: Property.find({CreatedBy: userid()}, {sort: {createdAt: -1}}).fetch(),
  }
})(Myproperty);
