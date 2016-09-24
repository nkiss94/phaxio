import { composeWithTracker } from 'react-komposer';
import HowItWorks from '../components/HowItWorks.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const url = props.params.company;
    if(Meteor.subscribe('websites.marketing', url) && Meteor.subscribe('programs.marketing', url).ready() && Meteor.subscribe('profiles.marketing', url).ready() ){ 
      const programs = Collections.Programs.find().fetch();
      const websites = Collections.Websites.find().fetch();
      const profiles = Collections.Profiles.find().fetch();

      onData(null, {programs, websites, profiles})
    };
};

export default composeWithTracker(composer)(HowItWorks);
