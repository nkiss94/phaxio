import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Router from 'react-router';
import Product from './Product';



class ProductList extends React.Component {
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
                Products
              </div>

            </div>

        <div className="content-wrapper clearfix">

            <div className="row project-list">
              <div className="project new" onClick={this.handleSubmit}>
                <a>
                  <i className="ion-ios7-plus-outline"></i>
                  <span className="info">
                    Add Product
                  </span>
                  <br />
                </a>
              </div>

              <div>
              {(this.props.products).map((product, index) => <Product product={product} index={index} key={product.identifier} />)}
              </div>
            </div>
        </div>
      </div>
      
    )
  }
  handleSubmit() {
    const company_id = this.props.profiles[0].company_id;
    const company_name = this.props.profiles[0].company_name;
    const now = new Date();
    const created  = now.toDateString();
    Meteor.call('new.product', created, company_id, company_name);
  }
}

export default ProductList; 