import {Athletes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('athletes.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Athletes.find(selector);
	});
}