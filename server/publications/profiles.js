import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('profiles.list', function () {
		return Profiles.find();
	});

	Meteor.publish('profiles.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Profiles.find(selector);
	});

	Meteor.publish('profiles.marketing', function (url) {
		check (url, String);
		const selector = {url: url};
		return Profiles.find(selector);
	});

}