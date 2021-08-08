// import React, { Fragment } from "react";
// import Events from './components/Events';
// import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
import { AuthProvider } from './components/auth/Auth';
import Login from "./components/auth/Login";
import Welcome from './Welcome';


// import React from 'react';
import './App.css';
import Navbar from './components/navbar/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/pages/about';
import EventPage from './components/pages/EventPage';

function App() {
  // return (
  //   <Fragment>
  //     {<Meeting/>}
  //   </Fragment>
  // )}  
  return (
    <div>
      <AuthProvider>
        <Welcome />
        <Login />
      </AuthProvider>
      
      <Router>
        <Navbar />
        {/* <Switch> */}
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/about' component={About} />
          <Route path='/EventPage' component={EventPage} />
          {/* <Route path='/about' component={About} /> */}
        {/* </Switch> */}
      </Router>
    
      {/* <AuthProvider>
        <Welcome />
        <Login />
      </AuthProvider> */}
    </div>

  );}

export default App;