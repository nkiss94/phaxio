import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { HTTP } from 'meteor/http'; 
import { Session } from 'meteor/session';
import Phaxio from 'phaxio';


export default function () {
    callback = function(err,data){console.log(data);};
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
        } 
         
    })
    Meteor.methods({
      'sendPhaxioFileLib'(number, file){
        check(number, String)
        check(file,String)
        var phaxio = new Phaxio(Meteor.settings.private.key,Meteor.settings.private.secret)
           return phaxio.sendFax({
            to: number,
            filenames: file
           },callback)
        } 
         
    })
}
