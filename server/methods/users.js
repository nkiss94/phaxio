import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create.owner'(name, email, company, url, date){
        check(name, String);
        check(email, String);
        check(company, String);
        check(url, String);
        check(date, String);
        const user = Meteor.userId();
        const owner = {
            user: user, 
            name: name,
            email: email,
            company_id: user,
            company_name: company,
            type: "owner",
            url: url,
            date: date,
            programs: []
        };
        const exists = Profiles.findOne({'user': user});
        if(!exists) {
            Profiles.insert(owner);
        }
    }
  });

}