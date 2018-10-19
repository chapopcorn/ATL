import  { Meteor } from 'meteor/meteor';
import Property from '../collections/collections.js';
import Images from '../collections/collections.js';

Meteor.methods({
	'addProperty': (blog)=> {
		Property.insert(blog)
}


})

Meteor.methods({
	'addComment': (comments)=> {
		Comments.insert(comments)
}


})


 

//Meteor.methods({
	//'removeBlog': (blog)=> {
		///Blog.remove(_id)
//}//

//})

//Meteor.methods({

    //'deleteUserAccount':(id)=> Meteor.users.remove(id)

    

//});

Meteor.methods({
	'removeBlog': (blog)=> {
		Blog.remove(_id)
}

})

Meteor.methods({

    'deleteUserAccount':(id)=> Meteor.users.remove(id)

    

});

