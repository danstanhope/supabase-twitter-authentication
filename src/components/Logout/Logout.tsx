import React from 'react';
import { connect } from 'react-redux';
import { signOutAction } from '../../actions/Auth';
import Button from '../Button/Button';

const Logout = (props: any) => {
    if (!props.authUser) {
        return null;
    }
    const signOutHandler = () => {
        return (event: React.MouseEvent) => {
            props.signOut();
            event.preventDefault();
        }
    };
    return (
        <>
            <Button
                isLoading={false}
                handler={signOutHandler}
                text="Sign out"
                loadingText="Signing out..."
            />
        </>
    );
};

const mapStateToProps = (state: any) => {
    return { authUser: state.auth.authUser };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        signOut: () => dispatch(signOutAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
