  <div class="row">
		    <div class="col s12">
		      <ul class="tabs">
			<li class="tab col s3"><a class="active" href="#inbox">INBOX
			<i class="material-icons">message</i>
			</a></li>
			<li class="tab col s3"><a href="#properties">MY PROPERTIES
			<i class="material-icons">home</i>
			</a></li>
			<li class="tab col s3"><a href="#test4">SETTINGS
			<i class="material-icons">settings</i>
			</a></li>
		      </ul>
		    </div>
    			<div id="inbox" class="col s12">
			<div class='row'>
				<div class="col s12">
				<h2 id='blue'>Inbox</h2>
				  <div class="section">
				    <h5>Message 1</h5>
				    <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    </p>
				  </div>
				  <div class="divider"></div>
				  <div class="section">
				    <h5>Message 2</h5>
				    <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    </p>
				  </div>
				  <div class="divider"></div>
				  <div class="section">
				    <h5>Message 3</h5>
				    <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    </p>
				  </div>

				</div>
		</div>
	</div>
	   	 <div id="properties" class="col s12">
			<h2 id='blue'>My Properties</h2>

			<div class="row">
				<div class="col s4">
					<img src="images/house.svg"/>
				</div>

				<div class="col s8">
					<h2>Lorem ipsum dolor</h2>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    	</p>
				</div>
			</div>
			<div class="row">
				<div class="col s4">
					<img src="images/house.svg"/>
				</div>

				<div class="col s8">
					<h2>Lorem ipsum dolor</h2>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    	</p>
				</div>
			</div>
			<div class="row">
				<div class="col s4">
					<img src="images/house.svg"/>
				</div>

				<div class="col s8">
					<h2>Lorem ipsum dolor</h2>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    	</p>
				</div>
			</div>

		</div>
	    <div id="test4" class="col s12"><h2 id='blue'>Settings</h2></div>
	  </div>



//////////////////////////////////////////////////////////////////Buttons

					 <button class="btn waves-effect waves-light light-blue lighten-1"
						type="submit" name="action">Settings
					    <i class="material-icons right">settings</i>
					  </button>
					 <button class="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action" ><a href='/'>Add Property
					    </a><i class="material-icons right">home</i>
					  </button>

/////////////////////////////////////Styling A Tag
a:hover{font-size: 28px;

}

.ButtonStyle{
  background-color: Violet;
  border: solid Violet;
  border-radius: 15px;
  padding: 15px 32px;
  margin-left: 100px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: black;
  font-size: 38px;
}




////////////////////////////Upload Images

createProp =(e)=>{
	e.preventDefault();
	const { imagesFile } = this.state;
	const currentUserId = Meteor.userId();
	const currentUser = Meteor.name;
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
            userId: Meteor.userId()
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
      //}
    }

handleImages = (e) => {
		
		this.setState({
			imagesFile: e.target.files[0]
		})
	}

imagesFile : null

/////////////////////////////////////////////////////////////////////////Profile Images
displayProfile=()=>{
	const blog = this.props.users;
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
		                        <h5 id ='bold'>K{blog.price}</h5>
					<p id ='bold'>{blog.bed} Bedroom(s) {blog.bath} Bathroom(s) {blog.type} for  
					{blog.forsale} in {blog.location}</p>
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
	  
////////////////////////Search Video

filterProperty = () => {
	const searchLocation = this.blog.filter(
			(blog) => {
				return blog.location.indexOf(this.state.searchtext) !== -1
			}		
	)
	return(searchLocation);
}


		let filterProperty = this.prop.blog.filter(
			(blog) => {
				return blog.location.indexOf(this.state.searchtext) !== -1
			}
		);


{filterProperty.map((blog) => { 
			return <Property blog={blog} key={blog.id}/>
		)}
return blog.map((blog) => {

filterProp =(e)=>{
	const blog = this.props.blog;
		(blog) => {
			return blog.location.indexOf(this.state.searchtext) !== -1
		}
	
	}

////////////////Iniliaze Stepper

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<!-- Materializecss compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<!-- jQueryValidation Plugin -->
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
<!--Import Materialize-Stepper JavaScript (after the jquery.validate.js and materialize.js) -->
<script src="materialize-stepper.min.js"></script>


///////////////////////////////////////////////////Easy Search

PropertyIndex = new EasySearch.Index({
	engine: new EasySearch.MongoDB({
		sort: funtion() {
			return { CreatedAt: -1}
		},
		selector: funtion(searchObject, options, aggregation) {
			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation)
		categoryFilter = options.search.proprs.category fil
		}
	)}
})

