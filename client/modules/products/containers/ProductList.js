import { composeWithTracker } from 'react-komposer';
import ProductList from '../components/ProductList.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(
  		userId && 
  		Meteor.subscribe('profiles.single', userId).ready() && 
  		Meteor.subscribe('products.single', userId).ready() &&
  		Meteor.subscribe('companies.single', userId).ready()
  	){
  		const profiles = Collections.Profiles.find().fetch();
  		const products = Collections.Products.find().fetch();
  		const company = Collections.Companies.find().fetch();
  		onData(null, {profiles, products, company})
  	};
};

export default composeWithTracker(composer)(ProductList); 
