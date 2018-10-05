console.log('Hello Client');
//import '../../api/forclient';  

//import {CreateArticle} from '/imports/ui/CreateArticle.jsx';
//import Home from '/imports/ui/Home.jsx';
//import { FlowRouter } from 'meteor/kadira:flow-router';


//export default flow-router (Home);
// import '../imports/startup/client';
// import '../imports/startup/server';
//export default router;

// import { Meteor } from 'meteor/meteor';
// import '../../ui/reroute.js'; 

//import { FilesCollection } from 'meteor/ostrio:files';

//export const UserFiles = new FilesCollection({collectionName: 'userfiles'});

import {Meteor} from 'meteor/meteor';
import {FilesCollection} from 'meteor/ostrio:files';
 
 const UserFiles = new FilesCollection({
       	debug: true,
       	collectionName: 'userFiles',
   	allowClientCode: false, 
   	onBeforeUpload: function (file) {
     
     if (file.size <= 1024 * 1024 * 25) {
       return true;
     }
     else {
       return 'Please upload documents, with size equal or less than 25MB';
     }
   }
 });
export default UserFiles
