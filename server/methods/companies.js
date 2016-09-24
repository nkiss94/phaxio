import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';


export default function () {
  Meteor.methods({
    'create.company'(company, url){
        check(company, String);
        check(url, String);
        const user = Meteor.userId();
        const new_company = {
            user: user,
            company_id: user,
            company_name: company,
            company_url: url
        };
            Companies.insert(new_company);
        }
    })
}