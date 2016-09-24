import { browserHistory } from 'react-router';

let actions = {

  purchaseProgram: function (amount, name, description, identifier, profile_id, company) {
    var handler = StripeCheckout.configure({
        key: Meteor.settings.public.stripe.testPublishableKey,
        locale: 'auto',
        token: function(token) {
          if(token){
            // FlowRouter.go('/loading');
            Meteor.call('chargeCard', token.id, function(error, result){
              if(error){
                console.log(error)
              }else if(result == "succeeded"){
                // FlowRouter.go('/thank_you')
                Meteor.call('profile.program', profile_id, identifier)
                Meteor.call('purchased.program', name, description, identifier)
                browserHistory.push(`/${company}/athlete_programs`)
              }else{
                console.log("sorry")
              }
            });
          }
        }
    });

    handler.open({
      name: name,
      description: description,
      currency: "cad",
      amount: amount
    });
  },

  createUser: function (name, email, company, password, date) {
    Accounts.createUser({
      username: name,
      password: password,
      type: "athlete",
    }, function(err) {
      if(err) {
        console.log(err)
      } else {
        actions.createAthlete(name, email, company, password, date);
      }
    });
  },
  
createAthlete: function (name, email, company, date){
  Meteor.call('create.athlete', name, email, company, date, (err) => {
    if(err){
      console.log(err)
    } 
    const userId = Meteor.userId();
    if(userId) {
      browserHistory.push(`/${company}/athlete_programs`)
    } else {
      console.log("we already have an account with that email");
    } 
  });
}

}

export default actions;