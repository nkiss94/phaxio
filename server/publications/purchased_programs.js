import {PurchasedPrograms} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('purchased_programs.list', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return PurchasedPrograms.find(selector);
	});

	Meteor.publish('purchased_programs', function(){
		return PurchasedPrograms.find();
	})

}