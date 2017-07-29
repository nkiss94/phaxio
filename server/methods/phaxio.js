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
var s3 = new AWS.S3(); 


export default function () {
    Meteor.methods({
      'sendPhaxio'(number, url){
        console.log(url);
        var finalfiles = [];
        for(var i = 0;i<url.length;i++){
          if(url[i] != null){
            finalfiles.push(url[i]);
          }
        }
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
        'upload'(finalNumber, previews, dataUrls){
              const id = ObjectID().toHexString();
              buf = Buffer.from(dataUrls.result.replace(/^data:application\/pdf;base64/, ""), 'base64');
              var params = {
                Bucket: 'faxsimpleupload',
                Key: id,
                Body: buf,
                ContentType:'application/pdf'                
              };
              return new Promise((resolve,reject)=>{
                s3.upload(params,function(err,res){
                  if(err){
                    reject(err);
                  }
                  else{
                    resolve(res);
                  }
                })
              }).then(function(res){
                return res.Location;
              });
            }
          
          });
        }
            

