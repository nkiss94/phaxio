import {Programs} from '/lib/collections';
import {Profiles} from '/lib/collections';
import {Lessons} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';
import { ObjectID, toHexString } from 'mongodb';

export default function () {
    Meteor.methods({

    'createProgram'(created){
        check(created, String);
        const user_id = Meteor.userId();
        const identifier = ObjectID().toHexString();
        Programs.update( {user: user_id},
            {$push: {
                programs:{
                    identifier: identifier,
                    created: created,
                    name: null,
                    weeks: null,
                    price: null,
                    exercises: []
                }
            }
        });

    },

    'new.lesson'(identifier, lesson_week, lesson_day){
        check(identifier, String);
        check(lesson_week, Number);
        check(lesson_day, String);
        const user_id = Meteor.userId();
        const Id = ObjectID().toHexString();
        Programs.update( {identifier: identifier},
            {$push: {
                lessons:{
                    id: Id,
                    program: identifier,
                    week: lesson_week,
                    day: lesson_day,
                    startDate: null,
                    endDate: null,
                    allDay: true,
                    exercises:[]
                }
            }
        });
    },

    'new.lessonZ'(identifier){
        check(identifier, String);
        const user_id = Meteor.userId();
        const Id = ObjectID().toHexString();
        Programs.update( {identifier: identifier},
            {$push: {
                lessons:{
                    id: Id,
                    program: identifier,
                    week: null,
                    day: null,
                    name: null,
                    video: null
                }
            }
        });
    },

    'updateYaProgram'(identifier, program_name, program_weeks, program_price){
        check(identifier, String);
        check(program_name, String);
        check(program_weeks, String);
        check(program_price, String);

        Programs.update( {identifier: identifier},
            {$set:{
                name : program_name,
                weeks : program_weeks,
                price : program_price    
                }
            }
        )
        for(var i = 0; i < (program_weeks*7) ; i++){
        const Id = ObjectID().toHexString();
        const day = i + 1;
        Programs.update( {identifier: identifier},
            {$push: {
                lessons:{
                    id: Id,
                    program: identifier,
                    week: Math.ceil(day/7),
                    day: i + 1,
                    allDay: true,
                    startDate: new Date(2016, 12, i+1),
                    endDate: new Date(2016, 12, i+1),
                    exercises: []
                }
            }
        });
        }
    },

    updateSupplements(identifier, supplement){
        check(identifier, String);
        Programs.update( {identifier: identifier},
            {$set:{
                supplements: supplement 
                }
            }
        )

    },

    'createExercise'(identifier, index){
        check(identifier, String);
        check(index, Number);
    },

    // 'updateProgram'(index, program_name, program_weeks, program_price){
    //     check(index, Number);
    //     check(program_name, String);
    //     check(program_weeks, String);
    //     check(program_price, String);

    //     const user_id = Meteor.userId();

    //     Profiles.update( {user: user_id},
    //         {$set:{
    //             ["programs."+index+".name"] : program_name,
    //             ["programs."+index+".weeks"] : program_weeks,
    //             ["programs."+index+".price"] : program_price
                
    //             }
    //         }   
    //     )
    // },

    'new.program'(created, company_id, company_name, url){
        check(created, String);
        check(company_id, String);
        check(company_name, String);
        check(url, String);
        const userId = Meteor.userId();
        const identifier = ObjectID().toHexString();
        const program = {
            user: userId, 
            identifier: identifier,
            created: created,
            company_id: company_id,
            company_name: company_name,
            url: url,
            supplements: null,
            name: null,
            weeks: null,
            price: null,
            lessons: []
        }
        const lesson = {
            user: userId,
            identifier: identifier,
            company_id: company_id,
            company_name: company_name,
            created: created,
            sublessons: []
        }
            Programs.insert(program);
            Lessons.insert(lesson);
           
        }

  });

}

