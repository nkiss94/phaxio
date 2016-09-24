import React from 'react';
import { Link } from 'react-router';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import options from '../options/options.js';

class AddProduct extends React.Component {
    constructor(props) {
    super(props);
    this.logChange = this.logChange.bind(this);
    this.state = {
        company_name: null,
        product_name: null,
        product_price: null,
        product_description: null
    }
    
  }
    render(){
        const product = this.props.products.filter((product) => product.identifier === this.props.params.productId);

        return(
            <div>

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

                        <div className="row">
                            <div className="col-md-5">
                                <div className="post-list-aside">
                                    <div className="post-single">
                                        <div className="post-slider-thumb post-img text-center">
                                            <ul className="slides">
                                                <li data-thumb="img/product/8.jpg">
                                                    <a href="javascript:;" title="Freshness Photo"><img src="/images/weights.jpg" alt=""/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="product-title">
                                    <h2 className="text-uppercase">
                                        <Select
                                            name="form-field-name"
                                            options={options}
                                            onChange={this.logChange}
                                            clearable={true}
                                        />
                                    </h2>
                                </div>

                                <div className="product-price txt-xl">
                                    <span className="border-tb p-tb-10"> $179.99</span>
                                </div>

                                <ul className="portfolio-meta m-bot-10 m-top-10">
                                    <li><span> Item No </span> 09087</li>
                                    <li><span> Condition </span> New </li>
                                </ul>
                                <p>
                                    Phasellus fringilla suscipit risus nec eleifend. Pellentesque eu quam sem, ac malesuada leo sem quam pellente. Awesome sliders give you the opportunity to showcase your content. Advanced theme options panel to easily customize your website.
                                </p>




                                <div className="clearfix">
                                    <a href="#" className="btn btn-medium btn-dark-solid  "><i className="fa fa-shopping-cart"></i>Start Selling!</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
    logChange(val){
        event.preventDefault();
        console.log(val.value)
        this.setState({
            company_name: val.value
        })
        console.log(this.state)
    }
}

export default AddProduct; 