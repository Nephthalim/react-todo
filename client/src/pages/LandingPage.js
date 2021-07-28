import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LandingPage/LoginForm'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = ({ setAuthentication, toaster }) => {
    const url = "http://localhost:5000"

    const loginUser = (user) => {
        fetch(
            url + "/auth/login",
            {
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json'
                }
            }

        ).then((res) => {
            if (res.status === 200) { return res.json(); }
            else if (res.status === 401) { toaster.error("🙁 Please make sure you are using the right credentials!"); }
            else if (res.status === 500) { toaster.error("🙁 Seems like there is a server error ☹️! Try again some other time"); }
        }).then((data) => {
            if (data.token) {
                localStorage.setItem("token", data.token)
                toaster.success();
                setAuthentication(true);
            }

        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <h1 className="text-center my-5">Login</h1>
            <LoginForm loginUser={loginUser} />
            {/* <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
        </>
    )
}

export default LandingPage
