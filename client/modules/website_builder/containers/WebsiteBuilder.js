import { composeWithTracker } from 'react-komposer';
import WebsiteBuilder from '../components/WebsiteBuilder.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(
  		userId && 
  		Meteor.subscribe('programs.single', userId).ready() && 
  		Meteor.subscribe('lessons.single', userId).ready() && 
  		Meteor.subscribe('profiles.single', userId).ready() && 
  		Meteor.subscribe('websites.single', userId).ready() &&
  		Meteor.subscribe('products.single', userId).ready() 
  	){ 
  		const programs = Collections.Programs.find().fetch();
  		const lessons = Collections.Lessons.find().fetch();
  		const profiles = Collections.Profiles.find().fetch();
  		const websites = Collections.Websites.find().fetch();
  		const products = Collections.Products.find().fetch();

  		onData(null, {programs, lessons, profiles, websites, products})
  	};
};

export default composeWithTracker(composer)(WebsiteBuilder);
