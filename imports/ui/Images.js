import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserFiles from '../startup/client/index.js'
//import IndividualFile from './ShowImages.js';

class FileUploadComponent extends Component {

constructor(props){
     super(props);
      this.state = {file : null}

}

uploadIt(e) {
    e.preventDefault();

    //let self = this;

    if (e.currentTarget.files && e.currentTarget.files[0]) {

      var file = e.currentTarget.files[0];

      if (file) {
        let uploadInstance = UserFiles.insert({
          file: file,
          meta: {
            locator: this.props.fileLocator,
            userId: Meteor.userId()
          },
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true
        }, false)
 

        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error)
        });

        uploadInstance.start(); 
      }
    }
  }


	



	render(){
			return (
	<div>

        <div className="row">
          <div className="file-field input-field col s6">
            	<p>Upload New File:</p>

	   	 <div class="btn waves-effect waves-light light-blue lighten-1">
			<span>Image</span>
               		<input type="file" id="fileinput" ref="fileinput" name='file' onChange={this.uploadIt}/>
          	</div>

          </div>
        </div>

        <div className="row">
          <div className="col s6">

            <img src={this.state.file}/>

          </div>
        </div>

      </div>
		);

	}
};

export default withTracker( ( props ) => {
  const filesHandle = Meteor.subscribe('files.all');
  const docsReadyYet = filesHandle.ready();
  const files = UserFiles.find({}, {sort: {name: 1}}).fetch();

  return {
    docsReadyYet,
    files,
  };
})(FileUploadComponent);
