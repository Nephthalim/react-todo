import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm/RegisterForm'

const RegisterPage = ({setAuthentication}) => {

    const history = useHistory();
    // const url = "https://nephthalim-react-todo.herokuapp.com"

    const addUser = (user) => {
        fetch(
            "/auth/register",
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
            
        }).catch((err) => {
            console.log("Error")
            console.log(err)
            history.replace('/register')
        })


    }


    return (
        <>
            <h1 className="text-center my-5">Register</h1>
            <RegisterForm addUser={addUser} />
        </>
    )
}

export default RegisterPage
