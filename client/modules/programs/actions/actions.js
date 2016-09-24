import { browserHistory } from 'react-router'

let actions = {
  handleSubmit: function(event) {
    const now = new Date();
    const created  = now.toDateString();
    Meteor.call('new.program', created);
  },

  initiateProgram: function(event){
    event.preventDefault();
    const identifier = this.props.programId;
    const program_name = this.refs.program_name.value;
    const program_weeks = this.refs.program_weeks.value;
    const program_price = this.refs.program_price.value;
    Meteor.call('updateYaProgram', identifier, program_name, program_weeks, program_price)
    this.props.getSecondView();
  },
  
createProfile: function (name, email, company, url, date){
  Meteor.call('create.profile', name, email, company, url, date, (err) => {
    if(err){
      console.log(err)
    } 
    const userId = Meteor.userId();
    if(userId) {
      browserHistory.push('/dashboard')
    } else {
      console.log("we already have an account with that email");
    } 
  });
}

}

export default actions;