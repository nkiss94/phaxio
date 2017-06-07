import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { HTTP } from 'meteor/http' 
import { Session } from 'meteor/session'

export default function () {
    Meteor.methods({
      'sendPhaxio'(){
           return HTTP.call( 'POST', 'https://api.phaxio.com/v2/faxes', 
                {
                  auth: 
                      Meteor.settings.private.phaxio
                  ,
                  data: {
                      "to": "+14165950400",
                      "content_url": "https://wealthsimple.s3.amazonaws.com/uploaded_document/bank_statements/attachments/000/012/270/original/cleared_back.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJT3DLZGRV7YFZJOA%2F20170606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20170606T184959Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dffc434f03d76327419e4efdf2d5973115f996770d8c0c69445a385f17a91d5e"
                  }
               
            })
        } 
    })
}
