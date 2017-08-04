import { composeWithTracker } from 'react-komposer';
import Fax from '../components/Fax.jsx';
import * as Collections from '/lib/collections';

function composer(props, onData){
  	if(Meteor.subscribe('faxable.divisions').ready()
  	){ 
  		const divisions = Collections.Divisions.find({'Method': 'FAX'}).fetch();
  		onData(null, {divisions})
  	};
};

export default composeWithTracker(composer)(Fax);
