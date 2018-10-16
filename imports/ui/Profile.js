import React, {Component } from 'react';
import Image from 'react-image-resizer';
import Footer from './Footer.js';
import Property from '../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../api/collections/collections.js';
import {ProfileImages} from '../api/collections/collections.js';
import Dashboard from './accounts/dashboard.js';
import Myproperty from './accounts/myproperty.js';

class Profile extends Component {

componentDidMount() {

$(document).ready(function(){
    $('.tabs').tabs(); 
  });

}

displayUser=()=>{
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


	username = () => {
			if (Meteor.user()){
					const name = Meteor.user().profile.name
					return(name);
				}
			}

	usersurname = () => {
		if (Meteor.user()){
				const surname = Meteor.user().profile.surname
				return(surname);
			}
		}

	useremail = () => {
		if (Meteor.user()){
				const email = Meteor.user().profile.email
				return(email);
			}
		}

	usernumber = () => {
		if (Meteor.user()){
				const number = Meteor.user().profile.number
				return(number);
			}
		}
	usercity = () => {
		if (Meteor.user()){
				const city = Meteor.user().profile.city
				return(city);
			}
		}

	userarea = () => {
		if (Meteor.user()){
				const area = Meteor.user().profile.area
				return(area);
			}
		}

	userid = () => {
		if (Meteor.user()){
				const myid = Meteor.user()._id
				return(myid);
			}
		}

	userlink = () => {
		if (Meteor.user()){
				const link = ProfileImages.findOne({'meta.key':this.useremail()}).link();
				return(link);
			}
		}

		logoutUser = (e) => {
		    e.preventDefault();
		    Meteor.logout((err) => {
		      if (err){
			console.log(err.reason);
		      }
		      else {
			FlowRouter.go('/')
		      }
		    }
		    )
		  }

	render(){
		return (
		<div>

		<div class='row'>
			<div class="col s5">
              			<div class="card-panel">
                			<div class="row">

			<img src={this.userlink()} width={300} height={300} alt=""
				class="circle responsive-img"/>
			<br/>
			<h4 class="header2" id='blue'>{this.username()} {this.usersurname()}</h4>
			Buyer | Seller
			<br/>
			<br/>
			<i class="material-icons">location_on</i>{this.userarea()}, {this.usercity()}<br/>
			<i class="material-icons">phone</i>{this.usernumber()}<br/>
			<br/>
			<br/>
<a class="waves-effect waves-light btn box-shadow waves-light light-blue lighten-1" href='/settings'>
settings <i class="material-icons right">settings</i></a>

		<button class="btn waves-effect waves-light light-blue lighten-1" 
		type="submit" name="action" onClick={e =>this.logoutUser(e)}>
		Log Out <i class="material-icons right">exit_to_app</i>
		</button>

					</div>
				</div>
			</div>
		
			<div class="col s7">
				<Dashboard/>
			</div>
		</div>

		<Footer/>
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
})(Profile);

