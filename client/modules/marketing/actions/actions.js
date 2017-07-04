import { browserHistory } from 'react-router'

let actions = {
  createUser: function (email, password) {
    Accounts.createUser({
      email: email,
      password: password,
    }, function(err) {
      if(err) {
        console.log(err)
      } else {
        actions.validateUser(email);
      }
    });
  },
  
validateUser: function (email){
    const userId = Meteor.userId();
    if(userId) {
      browserHistory.push('/dashboard')
    } else {
      console.log("no make account now!");
    } 
},

loginUser: function(email, password){
  Meteor.loginWithPassword(email, password, function(err){
    if(err){
      console.log(err)
    } 
    else if(Meteor.userId()) {
      browserHistory.push('/dashboard')
    } else{
      console.log("Sorry, no user with that email")
    }
  })
}

}

export default actions;