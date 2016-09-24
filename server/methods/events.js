import {Events} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';
import { ObjectID, toHexString } from 'mongodb';

export default function () {
    Meteor.methods({

    'new.event'(created, url){
        check(created, String);
        check(url, String);
        const userId = Meteor.userId();
        const identifier = ObjectID().toHexString();
        const event = {
            identifier: identifier,
            created: created,
            sublessons: []
        }
            Events.insert(event); 
        }

    });

}

