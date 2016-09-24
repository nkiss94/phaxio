import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Program from './Program';


class AthletePrograms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }

  render(){
    console.log(typeof(new Date()))
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
              <div className="project new">
                <a>
                  <i className="ion-ios7-plus-outline"></i>
                  <span className="info">
                    Create Program
                  </span>
                  <br />
                </a>
              </div>

              <div>
                  {(this.props.purchased_programs).map((program, index) => <Program program={program} index={index} key={program.identifier} company={this.props.params.company} />)}
              </div>
            </div>
        </div>
      </div>
      
    )
  }
}

export default AthletePrograms; 