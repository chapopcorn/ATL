import React, {Component } from 'react';
import ReactDOM from 'react-dom';
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

constructor(props){
     super(props);
      this.state = {searchtext:''}

}


handleSearch = (e) => {
		
		this.setState({
			searchtext: e.target.value
		})
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
					<h2 align="center">Search Your Home</h2>

					  <form class="col s12">
					    <div class="row">
					       <div class="input-field col s12">
						  <i class="material-icons prefix">home</i>
						  <input id="icon_prefix" type="text" class="validate" name='searchtext' onChange={this.handleSearch}/>
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
		
			
            <Footer/> 
		</div>
			
							
		
		);

	}
};



export default Search;

