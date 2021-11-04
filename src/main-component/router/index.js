import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import RoomPage from '../RoomPage'
import RoomSinglePage from '../RoomSinglePage'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage'
import FaqPage from '../FaqPage'
import ErrorPage from '../ErrorPage'  
import ContactPage from '../ContactPage' 
import ServiceSinglePage from '../ServiceSinglePage';
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/room' component={RoomPage} />
            <Route path='/room-single' component={RoomSinglePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/service' component={ServicePage} />
            <Route path='/service-single' component={ServiceSinglePage} />
            <Route path='/faq' component={FaqPage}/>
            <Route path='/404' component={ErrorPage}/>
            <Route path='/contact' component={ContactPage}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
