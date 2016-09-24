import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create.athlete'(name, email, company, date){
        check(name, String);
        check(email, String);
        check(company, String);
        check(date, String);
        const user = Meteor.userId();
        const athlete = {
            user: user, 
            name: name,
            email: email,
            company: company,
            type: "athlete",
            date: date,
            programs: []
        };
        const exists = Profiles.findOne({'user': user});
        if(!exists) {
            Profiles.insert(athlete);
        }
    }
  });

}

 