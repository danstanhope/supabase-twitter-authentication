import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import { authObserver } from './actions/Auth';
import { connect } from 'react-redux';

const App = (props: any) => {
  useEffect(() => {        
    return props.authObserver();
  });

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard}  />}
          />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </React.Fragment >
  );
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    authObserver: () => dispatch(authObserver())
  };
}

export default connect(null, mapDispatchToProps)(App);


