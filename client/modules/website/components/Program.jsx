import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import stripe from 'stripe';
import {Meteor} from 'meteor/meteor';
import Router from 'react-router';
import Menu from './Menu.jsx';
import actions from '../actions/actions.js';


class Program extends React.Component {

  constructor(props) {
    super(props);
    this.purchase = this.purchase.bind(this);
  }

	render(){
	  const {program} = this.props;
    const amount = Number(this.props.program.price)
 
		return(
			<div className="box">
				<a className="image fit"><img src="images/weights.jpg" alt="" /></a>
				<div className="inner">
					<h3>{program.name}</h3>
					<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
					<a onClick={this.purchase} className="button style2 fit">{program.price}</a>
				</div>
			</div>
		)
	}

  purchase(){
      const amount = Number(this.props.program.amount);
      const name = this.props.program.url;
      const description = this.props.program.name;
      const identifier = this.props.program.identifier;
      const profile_id = this.props.profiles.user;
      const company = this.props.company;
      const today = new Date();
      actions.purchaseProgram(amount, name, description, identifier, profile_id, company);
     
  }
}

export default Program; 