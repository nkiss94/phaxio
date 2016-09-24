import React from 'react';
import { Link } from 'react-router';

const Exercise = React.createClass({

	render(){

          const {lesson} = this.props;
		return(
               <tr>
                    <td>
                         <input name="select-product" type="checkbox" />
                    </td>
                    <td>
                         <img className="img-responsive product-img" src="images/products/2.png" />
                    </td>
                    <td>{lesson.name}</td>
                    <td className=""><span className="label label-success">Available</span></td>
                    <td className="center">{lesson.sets}</td>
                    <td className="center">{lesson.reps}</td>
              </tr>
		)
	}
});

export default Exercise; 


