import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LandingPage/LoginForm'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = ({ setAuthentication, toaster }) => {
    const url = "https://nephthalim-react-todo.herokuapp.com"

    const loginUser = (user) => {
        fetch(
            url + "/auth/login",
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
                console.log(data.token)
                localStorage.setItem("token", data.token)
                console.log("================")
                console.log("Set token")
                console.log("================")
                toaster.success();
                setAuthentication(true);
                console.log("Set Authentication to true")
            }

        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        console.log("LandingPage.js")
    }, [])
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
