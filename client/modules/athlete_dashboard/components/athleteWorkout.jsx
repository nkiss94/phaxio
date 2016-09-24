import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from 'react-router';
import AthleteExercise from './athleteExercise.jsx';


class athleteWorkout extends React.Component {
  render() {
    const exercises = this.props.lessons[0].sublessons.filter((sublesson) => sublesson.index === Number(this.props.params.index));
    return(
      <div>

        <div className="menubar">
          <div className="sidebar-toggler visible-xs">
            <i className="ion-navicon"></i>
          </div>

          <div className="page-title">
            Calendar
          </div>
        </div>


    	     <div id="search">
        <div id="wrapper">

          <div>
            <div className="content-wrapper clearfix">

              <div className="filters">
                <h3 className="hidden-xs">Watch Video</h3>
              </div>

              <div className="results">
                <table id="datatable-example">
                            <thead>
                                <tr>
                                    <th >Exercise
                                    </th>
                                    <th >Target
                                    </th>
                                    <th >Sets
                                    </th>
                                    <th >Reps
                                    </th>
                                    <th>
                                      Weight
                                    </th>
                                    <th>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                          { exercises === 'undefined' ? null : (exercises).map((exercise, index) => <AthleteExercise exercise={exercise} index={index} key={index} />)}
                      </tbody>
                  </table>


              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default athleteWorkout;