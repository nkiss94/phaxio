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
var Lob = require('lob')(Meteor.settings.private.lobTest);
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
        'upload'(finalNumber, previews, dataUrls){
            var finalfiles = [];
            if(dataUrls.length==0){
                  for(var i = 0; i <previews.length;i++){
                    finalfiles.push(previews[i]);
                  }
                  return HTTP.call( 'POST', 'https://api.phaxio.com/v2/faxes', 
                  {
                    auth: 
                        Meteor.settings.private.phaxio
                    ,
                    data: {
                        "to": finalNumber,
                        "content_url": finalfiles
                    }
                  })
            }
            else{
                  return new Promise((resolve,reject)=>{
                    for(var i = 0;i<dataUrls.length;i++){
                      const id = ObjectID().toHexString();
                      buf = Buffer.from(dataUrls[i].result.replace(/^data:application\/pdf;base64/, ""), 'base64');  
                      var params = {
                        Bucket: 'faxsimpleupload',
                        Key: id,
                        Body: buf,
                        ContentType:'application/pdf'                
                      };
                      s3.upload(params,function(err,res){
                        if(err){
                          reject(err);
                        }
                        else{
                          finalfiles.push(res.Location);
                          if(finalfiles.length == dataUrls.length){
                            resolve(res);
                          }
                        }
                      })
                    }
                    }).then(function(res){
                        for(var i = 0; i <previews.length;i++){
                          finalfiles.push(previews[i]);
                        }
                        return HTTP.call( 'POST', 'https://api.phaxio.com/v2/faxes', 
                        {
                          auth: 
                              Meteor.settings.private.phaxio
                          ,
                          data: {
                              "to": finalNumber,
                              "content_url": finalfiles
                          }
                     
                        })
                      })
                  }
            },
            'sendMailAddress'(address,addedURL){
              console.log(address);
              return new Promise((resolve,reject)=>{
                  Lob.letters.create({
                      address_placement:'insert_blank_page',
                      description: 'Transfer',
                      to: {
                        name: address.name,
                        address_line1: address.address1,
                        address_city: address.city,
                        address_state: address.state,
                        address_zip: address.zip,
                        address_country: address.country
                      },
                      from: {
                        name: 'Canadian ShareOwner Investments',
                        address_line1: '862 Richmond Street W.',
                        address_city: 'Toronto',
                        address_state: 'ON',
                        address_zip: 'M6J 1C9',
                        address_country: 'CA'
                      },
                      file: addedURL,
                      color: false,
                      double_sided:false
                      
                    }, function (err, res) {
                      if(res){
                        resolve(res);
                      }
                      else{
                        console.log(err);
                      }
                  });
              }).then(function(res){
                return res;
              });
            },
            'sendMailAddressWithUpload'(address,dataURL){
              console.log(address);
              return new Promise((resolve,reject)=>{
                      const id = ObjectID().toHexString();
                      buf = Buffer.from(dataURL.replace(/^data:application\/pdf;base64/, ""), 'base64');  
                      var params = {
                        Bucket: 'faxsimpleupload',
                        Key: id,
                        Body: buf,
                        ContentType:'application/pdf'                
                      };
                      s3.upload(params,function(err,res){
                        if(err){
                          reject(err);
                        }
                        else{
                          Lob.letters.create({
                              address_placement:'insert_blank_page',
                              description: 'Transfer',
                              to: {
                                name: address.name,
                                address_line1: address.address1,
                                address_city: address.city,
                                address_state: address.state,
                                address_zip: address.zip,
                                address_country: address.country
                              },
                              from: {
                                name: 'Canadian ShareOwner Investments',
                                address_line1: '862 Richmond Street W.',
                                address_city: 'Toronto',
                                address_state: 'ON',
                                address_zip: 'M6J 1C9',
                                address_country: 'CA'
                              },
                              file: res.Location,
                              color: false,
                              double_sided:false
                              
                            }, function (err, res) {
                              if(res){
                                resolve(res);
                              }
                              else{
                                console.log(err);
                              }
                          });
                        }
                      });
                  
              }).then(function(res){
                return res;
              });
            },
          });
        }