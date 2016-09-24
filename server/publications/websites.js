import {Websites} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('websites.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Websites.find(selector);
	});

	Meteor.publish('websites.marketing', function (url) {
		check(url, String);
		const selector = {url: url};
		return Websites.find(selector);
	});
}

