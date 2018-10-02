import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.js';

class Home extends Component {
	componentDidMount(){
  		var element = ReactDOM.findDOMNode(this.refs.dropdown)

		  $(element).ready(function() {
		    $('select').material_select();
		  });

			$(document).ready(function(){
	 $('#demo-carousel-content').carousel();
	  setInterval(function() {
	    $('#demo-carousel-content').carousel('next');
	  }, 6000);

	});
	}

	render(){
	return (
		<div>
		<div className="container">
		<div className="carousel carousel-slider" id="demo-carousel-content" data-indicators="true" >

	  <a className="carousel-item" href="#one!"><img src="images/royal-livingstone-resort-exterior.jpg"/></a>


	   <div className="carousel-fixed-item center">
		 	<img src="images/logo.png" className="circle responsive-img"/>
	     <h2 id="blue">ATL</h2>
	      <p id="blue">Apartment Locator</p>
	      <button  href="/about" className="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">M o r e i n f o r</button>
	    </div>

	    <a className="carousel-item" href="#two!"><img src="images/Windhoek-City-Views.jpg"/>
	      </a>
	   <a className="carousel-item" href="#two!"><img src="/home/alvin2/ATL/public/images/outside.jpg"/>
	      </a>

	  </div>
		</div>

		<div className='container'>
			<div className='row'>
				<h2 align="center">Search Your Home</h2>
					<form className="col s12">
						<div className="row">
							<div className="input-field col s12">
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
						<div className="row">
							<div className="input-field col s6">
					<select>
						 <option value="" disabled selected>Choose your type of home</option>
						<option value="apartment">Apartment</option>
						<option value="flat">Flat</option>
						<option value="house">House</option>
						<option value="land">Land</option>
					</select>
					<label>Type</label>
							</div>
							<div className="input-field col s6">
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
					<div className="row">
						<p className="range-field">
							<label>Price</label>
										<input type="range" id="test5" min="0" max="100000000" />
								</p>
					</div>
					<div className="row">
						<div className="col s12">
						<button className="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">Search
						<i className="material-icons right">search</i>
					</button>
						</div>
					</div>
					</form>
				</div>
			</div>


			<div className="container">
					<div className="row">
					<h2 id="blue">New Feeds</h2>
							<div className="col s4">
									<img src="images/FetchImageashx.jpeg"/>
							</div>
							 <div className="col s8">
							 <h1>ZMW 1 900 000</h1>
							<h3>2 Bedroom House for sale in Foxdale</h3>

									<p>Located close to Foxdale Residential and just a few metres
									 off tarred road, this property consists of 2 neat semi detached
									  2 bedroom flats plus study on 1532 sqm plot , three phase electricity,
										 borehole, plus vacant plot measuring 1645 sqm all going for asking price
										 of USD 190000. Offers are welcome. details and viewing.</p><p>posted:just now</p>
							</div>
					</div>
					<div className="row">
							<div className="col s4">
									<img src="images/FetchImage.ashx.jpeg"/>
							</div>
							 <div className="col s8">
							<h1>POA</h1>
							<h3>House for sale in Makeni</h3>
							<p>Green Lux Plaza compound is located in the heart of
							 Makeni, this vibrant and colorful community is set to
								be part of the dynamic core of the entire development.
								 *10% discount on the first three houses bought* Cash buyers:
									$1250 / sqm Installments: (50% down payment) - 3years - $1400
									 / sqm, 4years - $1450 / sqm, 5years - $1500 / sqm They consists
										of: * 6 houses of 2 bedroom - 127sqm *
										 14 houses of 3 bedroom - 1</p><p>posted:2 min ago</p>
							</div>
					</div>

					<div className="row">
							<div className="col s4">
								<img src="images/FetchImagex.jpeg"/>
							</div>
							 <div className="col s8">
							 <h1>POA</h1>
 							<h3>2 Bedroom House for sale in State Lodge</h3>
 							<p>New home - Available now - State Lodge Area -
 							 Connecting to Airport Road as well. House comes with
 							  large 5 acre plot & a good supply borehole. Cozy & neat
 								country home with lots of light and Cottage style windows.
 								Vicinity American International School. Well priced property
 								 - Owner relocating, will go soon. Call to view.</p><p>posted:7 min ago</p>
							</div>
					</div>

					<div className="row">
							<div className="col s4">
								<img src="images/house.jpeg"/>
							</div>
						   <div className="col s8">
							<h1>ZMW 1 000 000</h1>
							<h3>3 Bedroom House for sale in Foxdale</h3>
							<p>Property is located on Zambezi road in a housing estate. The house
							 in very good condition and has sitting tenants. Price is negotiable,
							 call in for viewing arrangements.</p><p>posted:15 min ago</p>
							</div>
					</div>
				 </div>
		<Footer/>
		</div>

	)
	}
}

export default Home
