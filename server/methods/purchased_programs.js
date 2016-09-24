import {PurchasedPrograms} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
        'purchased.program'(name, description, identifier){
        check(name, String);
        check(description, String);
        check(identifier, String);
        const userId = Meteor.userId();
        const program = {
            user: userId, 
            identifier: identifier,
            program_name: name,
            description: description,
            startDate: '1987-05-22'
        }
            PurchasedPrograms.insert(program);
        },

        'update.purchased.program'(identifier, date){
        check(identifier, String);
        check(date, String);
        console.log(identifier)

        PurchasedPrograms.update( {identifier: identifier},
            {$set:{
                startDate : date,
                }
            }
        )
        },

        'bought.program'(program){
            check(program, Object)
            console.log(program)
            PurchasedPrograms.insert(program);
        }
    
  });

}