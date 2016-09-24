import { composeWithTracker } from 'react-komposer';
import Programs from '../components/Programs.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const url = props.params.company;
    if(
    	Meteor.subscribe('purchased_programs.list') &&
    	Meteor.subscribe('websites.marketing', url) &&
    	Meteor.subscribe('programs.marketing', url).ready() &&
    	Meteor.subscribe('profiles.marketing', url).ready() &&
    	Meteor.subscribe('companies.marketing', url).ready()
    ){ 
      const programs = Collections.Programs.find().fetch();
      const websites = Collections.Websites.find().fetch();
      const profiles = Collections.Profiles.find().fetch();
      const purchased_programs = Collections.PurchasedPrograms.find().fetch();
      const companies = Collections.Companies.find().fetch();


      onData(null, {programs, websites, profiles, purchased_programs, companies})
    };
};

export default composeWithTracker(composer)(Programs);
