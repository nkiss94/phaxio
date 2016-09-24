import {Trainers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('trainers.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Trainers.find(selector);
	});
}