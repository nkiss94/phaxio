import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// Layout Containers
import Marketing from './modules/core/components/Marketing.jsx';
import InnerAuth from './modules/core/components/InnerAuth.jsx';

// Marketing
import Main from './modules/marketing/components/Main.jsx';

// Dashboard
import Dashboard from './modules/dashboard/components/Dashboard.jsx';


const router = (

/* Logins */
    <Router history={browserHistory}>
      	<Route path="/" component={Marketing}>
        	<IndexRoute component={Main}></IndexRoute>
    	</Route>

    	<Route path="/dashboard" component={InnerAuth}>
    		<IndexRoute component={Dashboard}></IndexRoute>
        </Route>
    </Router>
  

)

Meteor.startup(() => {
  render(router, document.getElementById("app"));
});



