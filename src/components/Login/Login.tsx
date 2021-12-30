import './Login.css';
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInAction } from '../../actions/Auth';
import Button from '../Button/Button';

const Login = (props: any) => {
  const { authUser, isLoading } = props;

  const authenticationHandler = () => {
    return (event: React.MouseEvent) => {
      props.signin();

      event.preventDefault();
    }
  };

  if (authUser) {
    return (<Navigate to="/dashboard" />);
  }

  return (
    (
      <Button
        isLoading={isLoading}
        handler={authenticationHandler}
        text="Sign in with Twitter"
        loadingText="Signing in..."
      />
    )
  )
}

const mapStateToProps = (state: any) => (
  {
    authUser: state.auth.authUser,
    isLoading: state.auth.isLoading
  }
);

const mapDispatchToProps = (dispatch: any) => (
  {
    signin: (user: any) => dispatch(signInAction(user))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
