import {Websites} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import React from 'react';


export default function () {
  Meteor.methods({
    'create.website'(company, url){
        check(company, String);
        check(url, String);
        console.log(company)
        const user = Meteor.userId();
        const website = {
            user: user,
            url: url,
            company_id: user,
            company_name: company,
            slogan: null,
            header1: null,
            content1: null,
            header2: null,
            content2: null,
            header3: null,
            content3: null,
            cta: null,
            sub_cta: null
        };
        const exists = Websites.findOne({'user': user});
        if(!exists) {
            Websites.insert(website);
        }
    },


      'update.website'(user, slogan, header1, content1, header2, content2, header3, content3, cta, sub_cta){
        check(user, String);
        check(slogan, String);
        check(header1, String);
        check(content1, String);
        check(header2, String);
        check(content2, String);
        check(header3, String);
        check(content3, String);
        check(cta, String)
        check(sub_cta, String);

        Websites.update( {user: user},
            {$set:{
                slogan : slogan, 
                header1: header1,
                content1: content1,
                header2: header2,
                content2: content2,
                header3: header3,
                content3: content3,
                cta: cta,
                sub_cta: sub_cta
                }
            }
        )
    }
    });

}