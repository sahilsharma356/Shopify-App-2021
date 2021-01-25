import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import signInPage from './components/auth/signInPage';
import signUpPage from './components/auth/signUpPage';
import CreateImage from './components/images/CreateImage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/signin" component={signInPage}></Route>
          <Route path="/signup" component={signUpPage}></Route>
          <Route path="/create" component={CreateImage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
   )
}

export default App;
