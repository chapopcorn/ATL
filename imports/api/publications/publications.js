import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simple-schema';
import Blog from '../collections/collections.js';
import { check } from 'meteor/check';

meteor.publish('blog', ()->{
	return Blog.find();
})

//Blog.scheme = new SimpleSchema({
	//user: String;
//});

//console.log(Blog.isValid());
//console.log(Blog.validationErrors());

const validationContext = new SimpleSchema({
  user: String;,
}).newContext();
 
 
console.log(validationContext.isValid());
console.log(validationContext.validationErrors());
