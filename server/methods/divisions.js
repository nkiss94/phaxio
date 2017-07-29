import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {ObjectID} from 'mongodb';

export default function () {
    Meteor.methods({
        'insert.division'(parent, division, hard_validation, soft_validation, method, aton_cuid, fax_number, call_number, email, other_intel){
            check(parent, Match.Any);
            check(division, Match.Any);
            check(hard_validation, Match.Any);
            check(soft_validation, Match.Any);
            check(method, Match.Any);
            check(aton_cuid, Match.Any);
            check(fax_number, Match.Any);
            check(call_number, Match.Any);
            check(email, Match.Any);
            check(other_intel, Match.Any);
            const new_division = {
              "Parent": parent,
              "Division": division,
              "Hard Validation": [],
              "Soft Validation": [],
              "Method": method,
              "ATON CUID": aton_cuid,
              "Fax Number": fax_number,
              "Follow-Up Call Number": call_number,
              "Follow-Up Email": email,
              "Other Intel": []
            }
            console.log(new_division)
        }
    })
  }
