import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.js';
import Property from '../api/collections/collections.js';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Images } from '../api/collections/collections.js';


class Home extends Component {


		
componentDidMount(){
  var element = ReactDOM.findDOMNode(this.refs.dropdown)

  $(element).ready(function() {
  $('select').material_select();
  	});
		$('.carousel.carousel-slider').carousel({
			fullWidth: true,
			indicators: true
		});

	$(document).ready(function(){
	 $('#demo-carousel-content').carousel();
	  setInterval(function() {
	    $('.carousel.carousel-slider').carousel('next');
	  }, 6000);

	});
	
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
                              <img src={link} width={250} height={300}/>
                            </div>

                            <div className="card-stacked">
                              <div className="card-content">
				<h4 className="header" id ='blue'>{blog.title}</h4>
                                <h5 id ='bold'>ZMW {blog.price}</h5>
				<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} for sale in {blog.location}</p>
                                <p>{blog.description}
                                </p>
                                <p> Posted on: {blog.createdAt.toString()}
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
    };



	render(){
		return (
		<div>
		
		<div className="carousel carousel-slider center">
    <div className="carousel-fixed-item center">
      
    </div>
    <div className="carousel-item  white-text" id="carousrlimage" href="#one!">
	<div id="divindiv">
      <h1>ALT</h1>
      <p className="white-text">
		ALT (Apartment Locator) is a property app that allows users to advertise
	 	available land and homes for rent or sell (agent free) in Lusaka, at the same time
	  	it also allows user to look for land and homes as well.
      </p>
  </div> 
    </div>
    <div className="carousel-item white-text" id="carousrlimage1" href="#two!">
	<div id="divindiv">
      <h1>Our Goal</h1>
      <p className="white-text">
		Createing and effective search component that filters the user's requirements.
		Having two type of profiles for buyers and sellers
		A show/hide password component when siging up.
		Having a minimum of 20 listings on the website when it launches
		Custome dashboard for each user depending on their requirements
	</p>
</div>
    </div>

    <div className="carousel-item  white-text"  id="carousrlimage2" href="#three!">
	<div id="divindiv"> 
      <h1>The Solution</h1>
      <p className="white-text">
		Users can state, when sigining up, if they are a buyer or seller, as well as their search requirements eg. 
		price range, province, area, home size etc.
		Collect data from Facebook and other such platforms to pre eneter into the database.
		Research 
		Alert users to porperties that fit their requirements in their dashboard.
	</p>
</div>
    </div>

    <div className="carousel-item  "  id="carousrlimage3" href="#four!">
	<div id="divindiv">
      <h1> Our Features</h1>
      <p className="white-text">
		Intelligent Filters
		ATL has a number of features that helps our users find their perfect homes. Read more about our 
		features <a href='/about'>here</a>. features  filter that to narrows the user’s search down and ensure 
		their relevance.

		Connection Between Users
		Contact the seller/buyer with just a tap. Call or message the advertisers instantly. 

		Smart Integration
		Our App smartly locates properties that lie within your preferred locality and budget.
	</p>
    </div>
    </div>
  </div>

		<div className='container'>
				<div class='row'> 
					<h2 align="center">Search Your Home</h2>

					  <form class="col s12">
					    <div class="row">
					       <div class="input-field col s12">
						  <i class="material-icons prefix">location_on</i>
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


		<h2 className="header center">Latest Properties</h2>	
		{this.displayUser()}
		<Footer/>
		</div>

		);
	}

}

Home.propTypes = {
  blog: PropTypes.array.isRequired,
};

export default withTracker(()=> {
  Meteor.subscribe('blog');

  return {
    blog: Property.find({}, {sort: {createdAt: -1}}).fetch(),
  };
}) (Home);




