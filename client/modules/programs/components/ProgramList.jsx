import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import SearchInput, {createFilter} from 'react-search-input';
import Program from './Program';
import Router from 'react-router';
import actions from '../actions/actions.js';


class ProgramList extends React.Component {
	constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    }
  }

	render(){
		return(
			<div id="projects">
		
            <div className="menubar">
              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div className="page-title">
                Programs
              </div>

            </div>

				<div className="content-wrapper clearfix">

						<div className="row project-list">
							<div className="project new" onClick={this.handleSubmit}>
								<a>
									<i className="ion-ios7-plus-outline"></i>
									<span className="info">
										Create Program
									</span>
									<br />
								</a>
							</div>

							<div>
							{(this.props.programs).map((program, index) => <Program program={program} index={index} key={program.identifier} />)}
							</div>
						</div>
				</div>
			</div>
			
		)
	}
	handleSubmit() {
		const profile = this.props.profiles[0];
		const company_id = profile.company_id;
		const company_name = profile.company_name;
		const url = profile.url;
	    const now = new Date();
	    const created  = now.toDateString();
	    Meteor.call('new.program', created, company_id, company_name, url);
	}
}

export default ProgramList; 