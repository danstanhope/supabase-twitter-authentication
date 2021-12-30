import './LoginPage.css';
import React, { useState, useEffect } from "react";
import Login from '../../components/Login/Login';

const LoginPage = (props: any) => {
    return (
        <>
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-twitter-600 font-semibold tracking-wide uppercase">
                            Demo
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Supabase Twitter Authentication
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Click the button to see how the authentication works.
                        </p>
                    </div>
                    <div className="mt-10 lg:text-center">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;