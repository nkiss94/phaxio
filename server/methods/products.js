import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';
import { ObjectID, toHexString } from 'mongodb';

export default function () {
    Meteor.methods({

    'new.product'(created, company_id, company_name){
        check(created, String);
        check(company_id, String);
        check(company_name, String);
        const userId = Meteor.userId();
        const identifier = ObjectID().toHexString();
        const product = {
            user: userId,
            identifier: identifier,
            company_id: company_id,
            company_name: company_name,
            created: created,
            category: null,
            price: null,
            description: null

        }
            Products.insert(product);         
        }
  });

}

