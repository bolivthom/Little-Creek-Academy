import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AdminDashboard from './components/dashboards/AdminDashboard';
import RegistrationPage from './components/pages/RegistrationPage';


import './App.css';



export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact  component={AboutPage} />
        <Route path='/contact' exact component={ContactPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path="/dashboard/admin" exact component={AdminDashboard} />
        <Route path="/registration" exact component={RegistrationPage} />
      </Switch>
    );
  }
}
