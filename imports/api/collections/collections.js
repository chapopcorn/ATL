import { Mongo } from 'meteor/mongo';
import {FilesCollection} from 'meteor/ostrio:files';
import {Meteor} from 'meteor/meteor';

const Property = new Mongo.Collection('blog')

export default Property; 


Property.attachBehaviour('timestampable');


Property.attachBehaviour('timestampable', {
  createdAt: 'insertedAt',
  createdBy: 'insertedBy',
  updatedAt: 'modifiedAt',
  updatedBy: false
});



export const Images = new FilesCollection({collectionName: 'images',
});


//collection.find({}, {"sort" : ['datefield', 'asc']} ).toArray(function(err,docs) {});

 //const UserFiles = new FilesCollection({
       	//debug: true,
       	//collectionName: 'userFiles',
   	//allowClientCode: false 
   	//onBeforeUpload: function (file) {
     
     //if (file.size <= 1024 * 1024 * 25) {
       //return true;
     //}
     //else {
       //return 'Please upload documents, with size equal or less than 25MB';
     //}
   //}
 //});

//export UserFiles
