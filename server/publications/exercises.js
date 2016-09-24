import {Exercises} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('exercises.list', function(userId)	{
		check(userId, String);
		const selector = {user: userId};
		return Exercises.find(selector);
	});
	
}