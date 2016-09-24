import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () { 

	Meteor.publish('companies.single', function (user_id) {
		check (user_id, String);
		const selector = {user: user_id};
		return Companies.find(selector);
	});

	Meteor.publish('companies.marketing', function(url)	{
		check(url, String);
		const selector = {company_url: url};
		return Companies.find(selector);
	});
	
}