import React from 'react'
import { useHistory } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm/RegisterForm'

const RegisterPage = () => {

    const history = useHistory();
    const url = "http://localhost:5000"

    const addUser = (user) => {
        fetch(
            url + "/auth/register",
            {
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        ).then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((data) => {
            localStorage.setItem("token", data.token)
        }).catch((res) => {
            history.replace('/register')
        })
        const token = localStorage.getItem("token")
        if (token !== undefined && token !== "") {
            history.replace('/')
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
