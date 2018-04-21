import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import RegistrationPage from '../../containers/RegistrationPage/RegistrationPage';
import LoginPage from '../../containers/LoginPage/LoginPage';
import AccountHome from '../../containers/Account/Account';
import CustomerHome from '../../containers/Customer/Customer';
import CustomerBills from '../../containers/Customer/CustomerBills';
import TechnicianHome from '../../containers/Technician/Technician';
import TechnicianBilling from '../../containers/Technician/BillGen';
import ManagerHome from '../../containers/Manager/Manager';
import AccountCalendar from '../../containers/ViewCalendar';

import decode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
    }
  />
); // const isAuthenticated and PrivateRoute are used to verify/ reroute unauthenticated users

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/view-schedule/:userId?" exact component={AccountCalendar} />
        <PrivateRoute path="/customer/:userId?" exact component={CustomerHome} />
        <PrivateRoute path="/customerBills/:userId?" exact component={CustomerBills} />
        <PrivateRoute path="/technician/:userId?" exact component={TechnicianHome} />
        <PrivateRoute path="/technicianBilling/:userId?" exact component={TechnicianBilling} />
        <PrivateRoute path="/manager/:userId?" exact component={ManagerHome} />
        <PrivateRoute path="/account/:userId?" exact component={AccountHome} />
      </Switch>
    );
  }
}

export default App;
