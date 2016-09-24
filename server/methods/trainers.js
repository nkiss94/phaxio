import {Trainers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';
import { ObjectID, toHexString } from 'mongodb';

export default function () {
    Meteor.methods({

    'new.trainer'(created, name, email, url){
        check(created, String);
        check(name, String);
        check(email, String);
        check(url, String);
        const userId = Meteor.userId();
        const identifier = ObjectID().toHexString();
        const trainer = {
            user: userId, 
            identifier: identifier,
            created: created,
            name: name,
            email: email,
            age: null,
            height_ft_in: null,
            weight_lbs: null,
            gender: null,
            experience_yrs: null,
            athletes: []
        }
            Trainers.insert(trainer);
        }

  });

}

 