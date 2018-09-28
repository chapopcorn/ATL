import React, {Component } from 'react';
import ReactDOM from 'react-dom';


class Search extends Component {

componentDidMount() {
  var element = ReactDOM.findDOMNode(this.refs.dropdown)

  $(element).ready(function() {
    $('select').material_select();
  });
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
						<select>
						 <option value="" disabled selected>Choose your province</option>
						  <option value="Central">Central Province</option>
						  <option value="Copperbelt">Copperbelt Province</option>
						  <option value="Eastern">Eastern Province</option>
						  <option value="Luapula">Luapula Province</option>
						  <option value="Lusaka">Lusaka Province</option>
						  <option value="Muchinga">Muchinga Province</option>
						  <option value="Northern">Northern Province</option>
						  <option value="North-Western">North-Western Province</option>
						  <option value="Southern ">Southern Province</option>
						  <option value="Western">Western Province</option>
						</select>
						<label>Location</label>
					      </div>
					    </div>
					    <div class="row">
					      <div class="input-field col s6">
						<select>
							 <option value="" disabled selected>Choose your type of home</option>
						  <option value="apartment">Apartment</option>
						  <option value="flat">Flat</option>
						  <option value="house">House</option>
						  <option value="land">Land</option>
						</select>
						<label>Type</label>
					      </div>
					      <div class="input-field col s6">
						<select multiple>
							 <option value="" disabled selected>Choose how many rooms</option>
						  <option value="1">One Bedrooms</option>
						  <option value="2">Two Bedrooms</option>
						  <option value="3">Three Bedrooms</option>
						  <option value="4">Four Bedrooms</option>
						</select>
						<label>Bedrooms</label>
					      </div>
					    </div>
						<div class="row">
							<p class="range-field">
								<label>Price</label>
					      			<input type="range" id="test5" min="0" max="100000000" />
					    		</p>
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
            
		</div>
			
							
		
		);

	}
};

export default Search
