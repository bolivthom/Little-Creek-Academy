import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import AdminDashboard from './components/dashboards/AdminDashboard';
import ParentDashboard from './components/dashboards/ParentDashboard';
import TeacherDashboard  from './components/dashboards/TeacherDashboard';
import RegistrationPage from './components/pages/RegistrationPage';
import AdminStudentPage from './components/pages/AdminStudentPage';
import AdminTeacherPage from './components/pages/AdminTeacherPage';
import AdminClassPage from './components/pages/AdminClassPage';
import AdminAdmissionPage from './components/pages/AdminAdmissionPage';


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
        <Route path="/dashboard/parent" exact component={ParentDashboard} />
        <Route path="/dashboard/teacher" exact component={TeacherDashboard} />
        <Route path="/registration" exact component={RegistrationPage} />
        <Route path="/dashboard/admin/students" exact component={AdminStudentPage} />
        <Route path="/dashboard/admin/teachers" exact component={AdminTeacherPage} />
        <Route path="/dashboard/admin/classes" exact component={AdminClassPage} />
        <Route path="/dashboard/admin/admissions" exact component={AdminAdmissionPage} />
      </Switch>
    );
  }
}
