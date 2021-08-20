import React from 'react'
import LoginForm from '../components/LandingPage/LoginForm'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = ({ setAuthentication, toaster }) => {

    const loginUser = (user) => {
        fetch("/auth/login",
            {
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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

        </>
    )
}

export default LandingPage
