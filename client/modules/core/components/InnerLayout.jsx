import React from 'react';

const InnerLayout = React.createClass({
  render(){
    return(
        <div>
          <div id="dashboard">
            <div id="wrapper">
                <div id="content">
                  {React.cloneElement(this.props.children, this.props)}
                </div>
          </div>
      </div>
        </div>
      )
    }
})

export default InnerLayout;