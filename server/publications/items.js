import {Items} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('items.list', function () {
		return Items.find();
	});
	
}