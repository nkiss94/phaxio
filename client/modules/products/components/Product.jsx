import React from 'react';
import { Link } from 'react-router';

const Product = React.createClass({
    render(){
        const {product} = this.props;
        return(
            <div>
                <Link to={`/products/${product.identifier}`}>
                <div className="project">
                    <div className="info">
                        <div className="name">BioSteel</div>
                        <div className="category">$75</div>
                        <div className="last-update">
                            Created:
                        </div>
                    </div>
                    <div className="members">
                        <img src="images/avatars/3.jpg" />
                        <img src="images/avatars/7.jpg" />
                        <img src="images/avatars/14.jpg" />
                        <img src="images/avatars/15.jpg" />
                        
                
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

export default Product; 