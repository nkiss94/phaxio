import {Meteor} from 'meteor/meteor';
import {Divisions} from '/lib/collections';
import {check} from 'meteor/check';
import {ObjectID} from 'mongodb';

export default function () {
    Meteor.methods({
        'insert.division'(parent, division, cashOnly,onlyRegisteredAccounts,digitsOnly,Alphanumeric,accountNumPattern,AccountNumLength,startsWith, soft_validation, method,fax_aton_number, call_number, email, other_intel,mailAddress){
            var FaxNumber;
            var ATONCUID;
            if (method =='FAX'){
                FaxNumber = fax_aton_number;
                ATONCUID = ''
              }else if(method =='ATON'){
                FaxNumber ='';
                ATONCUID = fax_aton_number
              }
            console.log(FaxNumber + " " + ATONCUID);
            const new_division = {
              "parent_institution": parent,
              "name": division,
              "transfer_cash_only": cashOnly,
              "registered_account_types_only":onlyRegisteredAccounts,
              "account_number_pattern":accountNumPattern,
              "account_number_lengths":AccountNumLength,
              "account_number_alphanumeric":Alphanumeric,
              "account_number_digits_only":digitsOnly,
              "account_number_starts_with":startsWith,
              "hint": soft_validation,
              "Method": method,
              "FaxNumber":FaxNumber,
              "cuid":ATONCUID,
              "FollowUpCallNumber": call_number,
              "FollowUpEmail": email,
              "OtherIntel": other_intel,
              "address":mailAddress.address,
              "city":mailAddress.city,
              "province":mailAddress.province,
              "postalCode":mailAddress.postalCode
            }
            Divisions.insert(new_division);        },

        'edit.division'(id,parent, division, cashOnly,onlyRegisteredAccounts,digitsOnly,Alphanumeric,accountNumPattern,AccountNumLength,startsWith, soft_validation, method,fax_aton_number, call_number, email, other_intel,mailAddress){
            var FaxNumber;
            var ATONCUID;
            if (method =='FAX'){
                FaxNumber = fax_aton_number;
                ATONCUID = ''
              }else if(method =='ATON'){
                FaxNumber ='';
                ATONCUID = fax_aton_number
              }
            Divisions.update({"id":id},{
              "id":id,
              "parent_institution": parent,
              "name": division,
              "transfer_cash_only": cashOnly,
              "registered_account_types_only":onlyRegisteredAccounts,
              "account_number_pattern":accountNumPattern,
              "account_number_lengths":AccountNumLength,
              "account_number_alphanumeric":Alphanumeric,
              "account_number_digits_only":digitsOnly,
              "account_number_starts_with":startsWith,
              "hint": soft_validation,
              "Method": method,
              "FaxNumber":FaxNumber,
              "cuid":ATONCUID,
              "FollowUpCallNumber": call_number,
              "FollowUpEmail": email,
              "OtherIntel": other_intel,
              "address":mailAddress.address,
              "city":mailAddress.city,
              "province":mailAddress.province,
              "postalCode":mailAddress.postalCode
            });        
            }    
    })
  }
