import {Lessons} from '/lib/collections';
import {Programs} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';
import { ObjectID, toHexString } from 'mongodb';

export default function () {
    Meteor.methods({

    'createStuff'(identifier, week, index, name, sets, reps, body){
        check(identifier, String);
        check(week, Number);
        check(index, Number);
        check(name, String);
        check(sets, String);
        check(reps, String);
        check(body, String);
        const Id = ObjectID().toHexString();
        Lessons.update( {identifier: identifier},
            {$push: {
                sublessons:{
                    id: Id,
                    program: identifier,
                    week: week,
                    index: index,
                    name: name,
                    sets: sets,
                    reps: reps,
                    body: body,
                    video: "sick video"
                }
            }
        })
    },

    'makeExercise'(identifier, week, index, name, sets, reps, body){
        check(identifier, String);
        check(week, Number);
        check(index, Number);
        check(name, String);
        check(sets, String);
        check(reps, String);
        check(body, String);
        const Id = ObjectID().toHexString();
        Programs.update( {identifier: identifier}, {lessons: { week: week} },
            {$push: {
                exercises:{
                    id: Id,
                    program: identifier,
                    week: week,
                    index: index,
                    name: name,
                    sets: sets,
                    reps: reps,
                    body: body,
                    video: "sick video"
                }
            }
        })
    }

    });

}

