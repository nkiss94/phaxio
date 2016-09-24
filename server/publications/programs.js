import {Programs} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	
	Meteor.publish('programs.list', function () {
		return Programs.find().sort({name: -1});
	});

	Meteor.publish('programs.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Programs.find(selector);
	});

	Meteor.publish('programs.marketing', function (url) {
		check (url, String);
		const selector = {url: url};
		return Programs.find(selector);
	});

	Meteor.publish('programs.marketing.single', function (id) {
		check (id, String);
		const selector = {identifier: id};
		return Programs.find(selector);
	});

}