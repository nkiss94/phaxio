import {Items} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';


export default function () {
    Meteor.methods({
        'Items.addOne'(name){
            check(name, Object);
            Items.insert(name);
            console.log(name)
        }
    })
}