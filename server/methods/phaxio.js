import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { HTTP } from 'meteor/http'; 
import { Session } from 'meteor/session';
import {ObjectID} from 'mongodb';


S3.config = {
  key: Meteor.settings.private.AWS.AWS_ACCESS_KEY_ID,
  secret: Meteor.settings.private.AWS.AWS_SECRET_ACCESS_KEY,
  bucket: 'faxsimpleupload'
};
var FormData = require('form-data');
var fs = require('fs');
var AWS = require('aws-sdk');
var FileReader = require('filereader');
var reader = new FileReader();
AWS.config.update({ 
  accessKeyId: Meteor.settings.private.AWS.AWS_ACCESS_KEY_ID,
  secretAccessKey: Meteor.settings.private.AWS.AWS_SECRET_ACCESS_KEY,
  "region": "us-east-1" 
});
var files = [];
var fileNames = [];
var s3 = new AWS.S3(); 

export default function () {
    Meteor.methods({
      'sendPhaxio'(number, url){
        var finalfiles = [];
        for(var i = 0;i<url.length;i++){
          if(url[i] != null){
            finalfiles.push(url[i]);
          }
        }
        for(var i = 0;i<files.length;i++){
          if(files[i] != null){
          finalfiles.push(files[i]);
          }
        }
        files = [];
        check(number, String)
        check(finalfiles, [String])
         return HTTP.call( 'POST', 'https://api.phaxio.com/v2/faxes', 
              {
                auth: 
                    Meteor.settings.private.phaxio
                ,
                data: {
                    "to": number,
                    "content_url": finalfiles
                }
             
          })
        },
        'deleteFile'(file){
          for(var i = 0;i<files.length;i++){
            if(file == fileNames[i]){
              files.splice(i, 1);
              fileNames.splice(i,1);
            }
          }
        },
        'uploadAWS'(result, name){
            const id = ObjectID().toHexString();
            buf = Buffer.from(result.replace(/^data:application\/pdf;base64/, ""), 'base64');
            var params = {
                Bucket: 'faxsimpleupload',
                Key: id,
                Body: buf,
                ACL: 'public-read',
                ContentType:'application/pdf'                
            };
            s3.upload(params, function (err, res) {
                 if (err) {
                     resp =  err;
                     console.log(err);
                 } else {
                     resp = res;
                     fileNames.push(name);
                     files.push(resp.Location);

                 }
            }
            );
        },
        
    })
  }
