import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
<<<<<<< HEAD
import { HTTP } from 'meteor/http'; 
import { Session } from 'meteor/session';

S3.config = {
  key: Meteor.settings.private.AWS.AWS_ACCESS_KEY_ID,
  secret: Meteor.settings.private.AWS.AWS_SECRET_ACCESS_KEY,
  bucket: 'faxsimpleupload'
};
=======
import { HTTP } from 'meteor/http' ;
import { Session } from 'meteor/session';
import {Divisions} from '/lib/collections';

>>>>>>> 0e97943be6c8de56ccc1719916506748bee60add

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
