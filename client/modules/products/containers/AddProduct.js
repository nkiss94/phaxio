import { composeWithTracker } from 'react-komposer';
import AddProduct from '../components/AddProduct.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('products.single', userId).ready() ){ 
  		const products = Collections.Products.find({"user": userId}).fetch();

  		onData(null, {products})
  	};
};


export default composeWithTracker(composer)(AddProduct);