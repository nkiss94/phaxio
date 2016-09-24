import {Profiles} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import stripe from 'stripe';

export default function () {
  Meteor.methods({

    'chargeCard'(myToken){
      	check(myToken, String);
    	  var key = Meteor.settings.private.stripe.testSecretKey;
        var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
        var stripeCreateChargeSync = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges)
      	
        var result = stripeCreateChargeSync({
        	amount: 4000,
    			currency: "cad",
   			  source: myToken, // obtained with Stripe.js
    			description: "Pttrns Textbook"
      	})

        return result.status;
    }
    
  });

}