import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// Layout Containers
import Marketing from './modules/core/components/Marketing.jsx';

// Marketing
import Home from './modules/marketing/components/Home.jsx';
import CheckDigits from './modules/marketing/components/CheckDigits.jsx';
import FaxSomething from './modules/marketing/components/FaxSomething';

const router = (

/* Logins */
    <Router history={browserHistory}>
      	<Route path="/" component={Marketing}>
        	<IndexRoute component={Home}></IndexRoute>
            <Route path="/check_digits" component={CheckDigits}></Route>
        	<Route path="/fax_something" component={FaxSomething}></Route>
    	</Route>
    </Router>
  

)

Meteor.startup(() => {
  render(router, document.getElementById("app"));
});



