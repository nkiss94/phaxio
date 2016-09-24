import { browserHistory } from 'react-router'

let actions = {
  createUser: function (name, email, company, password, url, date) {
    Accounts.createUser({
      email: email,
      password: password,
      type: "owner",
    }, function(err) {
      if(err) {
        console.log(err)
      } else {
        actions.createOwner(name, email, company, url, date);
        actions.createWebsite(company, url);
        actions.createCompany(company, url)
      }
    });
  },
  
createOwner: function (name, email, company, url, date){
  Meteor.call('create.owner', name, email, company, url, date, (err) => {
    if(err){
      console.log(err)
    } 
    const userId = Meteor.userId();
    if(userId) {
      browserHistory.push('/landing')
    } else {
      console.log("we already have an account with that email");
    } 
  });
},

createWebsite: function(company, url){
  Meteor.call('create.website', company, url)
},

createCompany: function(company, url){
  Meteor.call('create.company', company, url)
},

loginUser: function(email, password){
  Meteor.loginWithPassword(email, password, function(err){
    if(err){
      console.log(err)
    } 
    else if(Meteor.userId()) {
      browserHistory.push('/landing')
    } else{
      console.log("Sorry, no user with that email")
    }
  })
}

}

export default actions;