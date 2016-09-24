import {Lessons} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('lessons.list', function () {
		return Lessons.find();
	});

	Meteor.publish('lessons.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Lessons.find(selector);
	});

	Meteor.publish('purchased.lesson', function (identifier) {
		check (identifier, String);
		const selector = {identifier: identifier};
		return Lessons.find(selector);
	});



}