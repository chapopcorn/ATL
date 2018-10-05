import { mount } from 'react-mounter';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Signup from './accounts/Signup.js';
import Login from './accounts/Login.js';
import Notfound from './Notfound.js';
import Profile from './Profile.js';
import Search from './Search.js';
import Add from './Add.js';


let open;
open = FlowRouter.group({});
closed = FlowRouter.group({
  triggersEnter:[
    function(){
      if(!(Meteor.loggingIn() || Meteor.userId())) {
        return FlowRouter.go("/signup");
      }
       else  {
        return FlowRouter.go("/")
      }
    }
  ]
})



FlowRouter.route('/',{
	name: 'Home',
	action: ()=>{
		mount(Home, {})
	}
});


FlowRouter.route('/about',{
	name: 'About',
	action: ()=>{
		mount(About, {})
	}
});

FlowRouter.route('/contact',{
	name: 'Contact',
	action: ()=>{
		mount(Contact, {})
	}
});

FlowRouter.route('/login',{
	name: 'Login',
	action: ()=>{
		mount(Login, {})
	}
});

FlowRouter.route('/signup',{
	name: 'Signup',
	action: ()=>{
		mount(Signup, {})
	}
});

FlowRouter.route('/profile',{
	name: 'Profile',
	action: ()=>{
		mount(Profile, {})
	}
});

FlowRouter.route('/search',{
	name: 'Search',
	action: ()=>{
		mount(Search, {})
	}
});

FlowRouter.route('/addproperty',{
	name: 'Add',
	action: ()=>{
		mount(Add, {})
	}
});

FlowRouter.notFound ={
	action() {
		mount(Notfound, {});
	},
};
