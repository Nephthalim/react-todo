import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm/RegisterForm'

const RegisterPage = (setAuthentication) => {

    const history = useHistory();
    const url = "https://nephthalim-react-todo.herokuapp.com"

    const addUser = (user) => {
        fetch(
            url + "/auth/register",
            {
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }

        ).then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((data) => {
            localStorage.setItem("token", data.token)
            setAuthentication(true)
        }).catch((res) => {
            history.replace('/register')
        })
        const token = localStorage.getItem("token")
        if (token !== undefined && token !== "") {
            <Redirect to='/' />
        }
    }


    return (
        <>
            <h1 className="text-center my-5">Register</h1>
            <RegisterForm addUser={addUser} />
        </>
    )
}

export default RegisterPage
