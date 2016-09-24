import React from 'react';
import { Link } from 'react-router';

class AthleteProfile extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
      const index = this.props.athletes.findIndex((athlete) => athlete.identifier === this.props.params.athleteId);
      const athleteId = this.props.params.athleteId;
      const athlete = this.props.athletes[index];
    
    return(
      <div id="projects">

            <div className="menubar">

              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div>
              {athlete.name}
              </div>



              </div>


      <div id="user-profile">
      <div id="wrapper">
      <div className="content-wrapper clearfix">
        <div className="profile-info">
          <div className="avatar">
            <img src="/images/gilmour.jpg" />
            <div className="name">{athlete.name}</div>

          </div>
          <div className="main-details clearfix">
            <div className="col">
            Program
              <div className="value">1</div>
            
            </div>
            <div className="col">
            Started
              <div className="value">{athlete.created}</div>
              
            </div>
          </div>
          <div className="details">
            <div className="field">
              <label>Email</label>
              <div className="value">{athlete.email}</div>
              
            </div>
            <div className="field">
              <label>Est.</label>
              <div className="value">
                {athlete.created}
              </div>
            </div>
          </div>
        </div>


      <div className="profile-content" >

                <div className="tabs">
            <ul>
              <li>
                <a href="#" className="active">Profile</a>
              </li>
              <li>
                <a href="#">Performance</a>
              </li>
              <li>
                <a href="#">Purchases</a>
              </li>
            </ul>
          </div>


          <div className="tab-content">
            <div className="tab notes active">

              <form className="contact-comments" action="contact-us-alt.php" method="post">

              <div className="filter clearfix">
                <h4 className="pull-left">Personal</h4>
              </div>

                  <div className="row">
                      <div className="col-md-6 form-group">
                          <input type="text" name="name1" id="name1" className=" form-control" placeholder="First Name *" maxLength="100" required="" />
                      </div>

                      <div className="col-md-6 form-group">
                          <input type="text" name="name2" id="name2" className=" form-control" placeholder="Last Name" maxLength="100" required="" />
                      </div>

                      <div className="col-md-6 form-group">
                          <input type="age" name="age" id="age" className=" form-control" placeholder="Age *" maxLength="100" required="" />
                      </div>


                      <div className="form-group col-md-6">
                          <input type="text" name="sex" id="sex" className=" form-control" placeholder="Sex" maxLength="100" />
                      </div>
                  </div>

              <div className="filter clearfix">
                <h4 className="pull-left">Social</h4>
              </div>

                  <div className="row">
                      <div className="col-md-6 form-group">
                          <input type="phone" name="phone" id="phone" className="form-control" placeholder="Cell Phone" maxLength="100" required="" />
                      </div>

                      <div className="col-md-6 form-group">
                          <input type="email" name="email" id="email" className="form-control" placeholder="Email" maxLength="100" required="" />
                      </div>

                      <div className="col-md-6 form-group">
                          <input type="age" name="twitter" id="twitter" className="form-control" placeholder="Twitter Handle" maxLength="100" required="" />
                      </div>


                      <div className="form-group col-md-6">
                          <input type="text" name="instagram" id="sex" className="form-control" placeholder="Instagram Username" maxLength="100" />
                      </div>
                  </div>


             
                      <div className="form-group col-md-12">
                          <button type="submit" className="btn btn-small btn-dark-solid ">
                              Update
                          </button>
                      </div>
               
              </form>


          
              
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

    </div>
      
    )
  }
}

export default AthleteProfile;