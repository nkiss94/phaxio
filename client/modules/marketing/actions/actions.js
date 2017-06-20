import { browserHistory } from 'react-router'

let actions = {
  createUser: function (name, email, password, date) {
    Accounts.createUser({
      email: email,
      password: password,
    }, function(err) {
      if(err) {
        console.log(err)
      } else {
        actions.validateUser(name, email, date);
      }
    });
  },
  
validateUser: function (name, email, date){
  Meteor.call('create.profile', name, email, date, (err) => {
    if(err){
      console.log(err)
    } 
    const userId = Meteor.userId();
    if(userId) {
      browserHistory.push('/home')
    } else {
      console.log("we already have an account with that email");
    } 
  });
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