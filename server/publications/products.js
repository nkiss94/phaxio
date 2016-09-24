import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 
	
	Meteor.publish('products.list', function () {
		return Products.find();
	});

	Meteor.publish('products.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Products.find(selector);
	});
}