import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';



// Layouts
import InnerAuth from './modules/core/components/InnerAuth.jsx';
import InnerLayout from './modules/core/components/InnerLayout.jsx';
import Marketing from './modules/core/components/Marketing.jsx';
import LoginLayout from './modules/core/components/LoginLayout.jsx';
import Sidebar from './modules/core/components/Sidebar.jsx';
import WebsiteLayout from './modules/core/components/WebsiteLayout.jsx';

import AthleteInnerAuth from './modules/core/components/AthleteInnerAuth.jsx';
import AthleteInnerLayout from './modules/core/components/AthleteInnerLayout.jsx';
import AthleteSidebar from './modules/core/containers/AthleteSidebar.js';


// Marketing
import Homepage from './modules/marketing/components/Homepage.jsx';
import Login from './modules/marketing/components/Login.jsx';
import Register from './modules/marketing/components/Register.jsx';


// Dashboard
import Landing from './modules/dashboard/containers/Landing.js';
import Business from './modules/dashboard/components/Business.jsx';
import AthleteList from './modules/dashboard/containers/AthleteList.js';
import AthleteProfile from './modules/dashboard/containers/AthleteProfile.js';
import TrainerList from './modules/dashboard/containers/TrainerList.js';
import TrainerProfile from './modules/dashboard/containers/TrainerProfile.js';

// Programs
import ProgramList from './modules/programs/containers/ProgramList.js';
import Creator from './modules/programs/containers/Creator.js';
import Lesson from './modules/programs/components/Lesson.js';

// Products
import ProductList from './modules/products/containers/ProductList.js';
import AddProduct from './modules/products/containers/AddProduct.js';

// Website Builder
import WebsiteBuilder from './modules/website_builder/containers/WebsiteBuilder.js';

// Website
import Website from './modules/website/containers/Website.js';
import Home from './modules/website/containers/Home.js';
import Programs from './modules/website/containers/Programs.js';
import About from './modules/website/containers/About.js';
import HowItWorks from './modules/website/containers/HowItWorks.js';
import LoginPage from './modules/website/containers/Login.js';
import RegisterPage from './modules/website/containers/Register.js';
import Contact from './modules/website/containers/Contact.js';

// Athlete Dashboard
import athletePrograms from './modules/athlete_dashboard/containers/athletePrograms.js';
import athleteLanding from './modules/athlete_dashboard/components/athleteLanding.jsx';
import athleteProfile from './modules/athlete_dashboard/components/athleteProfile.jsx';
import athletePerformance from './modules/athlete_dashboard/containers/athletePerformance.js';
import athleteSquad from './modules/athlete_dashboard/components/athleteSquad.jsx';
import athleteCalendar from './modules/athlete_dashboard/containers/athleteCalendar.js';
import athleteWorkout from './modules/athlete_dashboard/containers/athleteWorkout.js';


const router = (

    <Router history={browserHistory}>

      	<Route path="/" component={Marketing}>
        	<IndexRoute component={Homepage}></IndexRoute>
    	</Route>

    	<Route path="/" component={LoginLayout}>
        	<Route path="/login" component={Login}></Route>
        	<Route path="/register" component={Register}></Route>
    	</Route>

        <Route path="/" component={InnerAuth}>
            <IndexRoute component={Sidebar}></IndexRoute>
            <Route path="/landing" component={Landing}></Route>
            <Route path="/business" component={Business}></Route>
            <Route path="/athletes" component={AthleteList}></Route>
            <Route path="/athletes/:athleteId" component={AthleteProfile}></Route>
            <Route path="/trainers" component={TrainerList}></Route>
            <Route path="/trainers/:trainerId" component={TrainerProfile}></Route>
            <Route path="/programs" component={ProgramList}></Route>
            <Route path="/programs/:programId" component={Creator}></Route>
            <Route path="/programs/:programId/:lessonWeek/:lessonDay" component={Lesson}></Route>
            <Route path="/products" component={ProductList}></Route>
            <Route path="/products/:productId" component={AddProduct}></Route>
            <Route path="/website" component={WebsiteBuilder}></Route>
        </Route>

        <Route path="/" component={WebsiteLayout}>
            <Route path="/:company" component={Home}></Route>
            <Route path="/:company/programs" component={Programs}></Route>
            <Route path="/:company/about" component={About}></Route>
            <Route path="/:company/how_it_works" component={HowItWorks}></Route>
            <Route path="/:company/login" component={LoginPage}></Route>
            <Route path="/:company/register" component={RegisterPage}></Route>
            <Route path="/:company/contact" component={Contact}></Route>
        </Route>

        <Route path="/" component={AthleteInnerAuth}>
            <IndexRoute component={AthleteSidebar}></IndexRoute>
            <Route path="/:company/athlete_landing" component={athleteLanding}></Route>
            <Route path="/:company/athlete_programs" component={athletePrograms}></Route>
            <Route path="/:company/athlete_profile" component={athleteProfile}></Route>
            <Route path="/:company/athlete_performance" component={athletePerformance}></Route>
            <Route path="/:company/athlete_squad" component={athleteSquad}></Route>
            <Route path="/:company/:programId" component={athleteCalendar}></Route>
            <Route path="/:company/:programId/:index" component={athleteWorkout}></Route>
        </Route>

    </Router>
  

)

Meteor.startup(() => {
  render(router, document.getElementById("app"));
});



