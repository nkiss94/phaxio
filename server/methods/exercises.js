import {Exercises} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';
import { ObjectID, toHexString } from 'mongodb';

export default function () {
    Meteor.methods({

    'record.exercise'(name, sets, reps, weight, programId, reported_date){
        check(name, String);
        check(sets, String);
        check(reps, String);
        check(weight, String);
        check(programId, String);
        check(reported_date, String);
        const userId = Meteor.userId();
        const identifier = ObjectID().toHexString();
        const exercise = {
            user: userId, 
            programId: programId,
            identifier: identifier,
            reported_date: reported_date,
            sets: sets,
            reps: reps,
            weight: weight
        }

        Exercises.insert(exercise);
          
        }

  });

}