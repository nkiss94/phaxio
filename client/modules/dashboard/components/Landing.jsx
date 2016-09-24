import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Table from 'reactable';

class Landing extends React.Component {

  render() {
    return (
          <div id="reports">
            <div className="menubar">

              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div>
                Landing
              </div>

            <div className="content-wrapper">

              <section className="body-content ">
                <div className="page-content">
                    <div className="container">
                      <h2>Upload Video</h2>

                      <form action="/file-upload" className="dropzone" id="my-awesome-dropzone">
                        <input type="file" />

                      </form>
                        
                    </div>
                </div>
              </section>

            </div>
          
          </div>
      </div>
    )
  }
}

export default Landing;