import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { HTTP } from 'meteor/http'; 
import { Session } from 'meteor/session';
 

S3.config = {
  key: Meteor.settings.private.AWS.AWS_ACCESS_KEY_ID,
  secret: Meteor.settings.private.AWS.AWS_SECRET_ACCESS_KEY,
  bucket: 'faxsimpleupload'
};

var fs = require('fs');

var AWS = require('aws-sdk');

AWS.config.update({ 
  accessKeyId: Meteor.settings.private.AWS.AWS_ACCESS_KEY_ID,
  secretAccessKey: Meteor.settings.private.AWS.AWS_SECRET_ACCESS_KEY,
  "region": "us-east-1" 
});

var s3 = new AWS.S3(); 


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
        
        'uploadAWS'(file){
            const id = ObjectID().toHexString();
            const upload_file = file[0].preview;
            var params = {
                Bucket: 'faxsimple',
                Key: id,
                Body: upload_file,
                ACL: 'public-read'
            };
            s3.upload(params, function (err, res) {
                if (err) {
                    console.log("Error uploading data: ", err);
                } else {
                    console.log(res);
                }
            });
        }  
    })
  }
