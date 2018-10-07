import  { Meteor } from 'meteor/meteor';
import Property from '../collections/collections.js';

Meteor.methods({
	'addProperty': (blog)=> {
		Property.insert(blog)
}


})


 
Meteor.methods({
	'removeBlog': (blog)=> {
		Blog.remove(_id)
}

})

Meteor.methods({

    'deleteUserAccount':(id)=> Meteor.users.remove(id)

    

});
