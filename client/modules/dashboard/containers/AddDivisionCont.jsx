import { composeWithTracker } from 'react-komposer';
import AddDivision from '../components/AddDivision.jsx';
import * as Collections from '/lib/collections';

function composer(props, onData){
  	if(Meteor.subscribe('divisions.list').ready()
  	){ 
  		const divisions = Collections.Divisions.find().fetch();
  		onData(null, {divisions})
  	};
};

export default composeWithTracker(composer)(AddDivision);
