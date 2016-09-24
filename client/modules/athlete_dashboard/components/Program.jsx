import React from 'react';
import { Link } from 'react-router';
import Router from 'react-router';

const Program = React.createClass({
	render(){
		const {program} = this.props;
		const {company} = this.props;
		return(
			<div>
				<Link to={`/${company}/${program.identifier}`}>
				<div className="project">
					<div className="info">
						<div className="name">{program.program_name}</div>
						<div className="category">{program.description}</div>
						<div className="last-update">
							Created: {program.created}
						</div>
					</div>
					<div className="members">				
						<i className="fa fa-plus"></i>
						
						<ul className="menu">
							<li>Invite a new user</li>
							<li>Change name</li>
							<li>Delete project</li>
						</ul>
					</div>
				</div>
				</Link>
			</div>
		)
	}
})

export default Program; 