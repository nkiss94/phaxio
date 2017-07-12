import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { HTTP } from 'meteor/http' ;
import { Session } from 'meteor/session';
import {Divisions} from '/lib/collections';


export default function () {
    Meteor.methods({
      'sendPhaxio'(number, url){
        check(number, String)
        check(url, [String])
        
           return HTTP.call( 'POST', 'https://api.phaxio.com/v2/faxes', 
                {
                  auth: 
                      Meteor.settings.private.phaxio
                  ,
                  data: {
                      "to": number,
                      "content_url": url
                      
                  }
               
            })
        },

        'insert.division'(name){
          check(name, String)
          const division = {
            name: name
          }
          Divisions.insert(division)
        } 
         
    })
}
