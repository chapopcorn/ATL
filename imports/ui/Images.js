import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Images from '../api/collections/collections.js';

class ImageUpload extends Component {

constructor(props){
     super(props);
      this.state = {imagesFile : null}

}

handleImages = (e) => {
		
		this.setState({
			imagesFile: e.target.files[0]
		})
	}

uploadIt = (e) => {
    e.preventDefault();
   const { imagesFile } = this.state;

    //let self = this;

  //  if (e.imagesFile.files && e.imagesFile.files[0]) {

    //  var file = e.imagesFile.files[0];

      if (imagesFile) {
        let uploadInstance = Images.insert({
          file: imagesFile,
          meta: {
            userId: Meteor.userId()
          },
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true
        }, true);
 

        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error)
        });
 	uploadInstance.on('start', function ( fileObj) {
          console.log('startinnnnng during upload: ' + fileObj)
        });

       // uploadInstance.start(); 
      //}
    }
  }




	render(){
			return (
	<div>

        <div className="row">
          <div className="col s6">
            	<p>Upload New File:</p>
			<form onSubmit={this.uploadIt}>
			  	<div className="file-field input-field">
		      			<div className="btn waves-effect waves-light light-blue lighten-1">
						<span>Image</span>
               					<input type="file" id="fileinput" ref="fileinput" name='imagesFile' 
						onChange={this.handleImages}/>
		      			</div>
				</div>
                 		<button class="btn waves-effect waves-light light-blue lighten-1 right" 
               				type="submit" name="action">
					Add
                       			<i class="material-icons right">add</i>
               			</button>
			</form>
                         </div>
          	</div>


        <div className="row">
          <div className="col s6">
		<p>Image below:</p>
 		//<img src={self.link} alt={self.name}/>
          </div>
        </div>

      </div>
		);

	}
};

export default ImageUpload
