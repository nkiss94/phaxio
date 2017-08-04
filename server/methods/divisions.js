import {Meteor} from 'meteor/meteor';
import {Divisions} from '/lib/collections';
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
              "HardValidation": [],
              "SoftValidation": [],
              "Method": method,
              "ATONCUID": aton_cuid,
              "FaxNumber": fax_number,
              "FollowUpCallNumber": call_number,
              "FollowUpEmail": email,
              "OtherIntel": []
            }
            Divisions.insert(new_division);        }
    })
  }
