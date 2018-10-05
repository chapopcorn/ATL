import  { Meteor } from 'meteor/meteor';
import Property from '../collections/collections.js';

Meteor.methods({
	'addProperty': (blog)=> {
		Property.insert(blog)
}


})
