import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { connect } from "react-redux";

interface PrivateRouteProps extends RouteProps {
    component: any;
    authUser: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, authUser, ...rest } = props;

    if (authUser) {
        return <Component {...props} />
    } else {
        return <Navigate to='/login' />
    }    
}

const mapStateToProps = (state: any) => {
    return {
        authUser: state.auth.authUser
    }
};

export default connect(mapStateToProps)(PrivateRoute);