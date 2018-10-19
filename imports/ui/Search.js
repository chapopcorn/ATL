import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session';
import Footer from './Footer.js';
import Property from '../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../api/collections/collections.js';


class Search extends Component {

componentDidMount() {
  var element = ReactDOM.findDOMNode(this.refs.dropdown)

  $(element).ready(function() {
    $('select').material_select();
  });
}

state = {
     	query: '',
   	results: [],
   	data :[{n:'i'}]
	
 }

newPage = (e, propertyId) => {
	e.preventDefault();
	Session.set('property', propertyId)
	FlowRouter.go('/viewproperty')
}

getInfo =()=>{
 	const results = this.state.data;

	return (results.map((res)=>{
	
	return <div key={res._id}>

	

	<div className='container'>
		  <div class="row">
		    <div class="col s12">
		      <div class="card-panel">
		        <div class="row">
		        
		          <h4 class="header2"><a href='/viewproperty'>{res.title}</a></h4>
<p id ='bold'>{res.bed} Bedroom(s) {res.bath} Bathroom(s) {res.type} for sale in {res.location}</p>
		          <p>{res.description}</p>
		        <a class="waves-effect waves-light btn box-shadow light-blue lighten-1" onClick={e => this.newPage(e, res._id)}>
			View Property</a>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
		})
	)

  }



handleInputChange = () => {
   this.setState({
     query: this.search.value
   }) 

var search = this.state.query;
var re = new RegExp(this.state.query);
console.log(re)

 const data = Property.find({location: {$regex:re}}).fetch()

 this.setState({
     data: data
   }) 

console.log(JSON.stringify(data))
 
 }


	render(){


		return (
		
		<div class = "search-bar">

			<div class='row'> 
				<div class="col s12" id='row-2'>
					
				</div>
    			</div>
			<div class='container'>
				<div class='row'> 
				<h4 align="center" id='blue'>SEARCH FOR YOUR HOME</h4>

					  <form class="col s12">
					    <div class="row">
					       <div class="input-field col s12">
						  <i class="material-icons prefix">location_on</i>
						  <input id="icon_prefix" type="text" class="validate"  
ref={input => this.search = input} onChange={this.handleInputChange}/>
						  <label for="icon_prefix">Search by Location</label>
						</div>
					     
						</div>
						<div class="row">
							<div class="col s12">
							<button class="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">Search
					    <i class="material-icons right">search</i>
					  </button>
							</div>	
						</div>	
					  </form>
					</div>
    		</div>
		
		{this.getInfo()}  
            <Footer/> 
		</div>
			
							
		
		);

	}
};


Search.propTypes = {
  blog: PropTypes.array.isRequired,
};

export default withTracker((prop)=> {
  Meteor.subscribe('blog');

const ready  = Meteor.subscribe('blog').ready();
	

  return {
	ready: ready,
    blog: Property.find({}).fetch()
  };
}) (Search);

