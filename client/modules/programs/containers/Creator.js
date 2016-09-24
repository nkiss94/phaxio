import { composeWithTracker } from 'react-komposer';
import Creator from '../components/Creator.js';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('programs.single', userId).ready() && Meteor.subscribe('lessons.single', userId).ready()  ){ 
  		const programs = Collections.Programs.find({"user": userId}).fetch();
  		const lessons = Collections.Lessons.find().fetch();

  		onData(null, {programs, lessons})
  	};
};


export default composeWithTracker(composer)(Creator);