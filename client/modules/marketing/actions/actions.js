import { browserHistory } from 'react-router'

let actions = {
  createUser: function (username, password) {
    Accounts.createUser({
      username: username,
      password: password,
    }, function(err) {
      if(err) {
        console.log(err)
      } else {
        actions.validateUser(username);
      }
    });
  },
  
validateUser: function (username){
    const userId = Meteor.userId();
    if(userId) {
      browserHistory.push('/dashboard')
    } else {
      console.log("no make account now!");
    } 
},

loginUser: function(username, password){
  Meteor.loginWithPassword(username, password, function(err){
    if(err){
      console.log(err)
    } 
    else if(Meteor.userId()) {
      browserHistory.push('/dashboard')
    } else{
      console.log("Sorry, no user with that username")
    }
  })
}

}

export default actions;