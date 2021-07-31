import React from 'react'
import { useRef } from 'react'

const RegisterForm = ({addUser}) => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const registerUser = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value.toString()
        const enteredEmail = emailInputRef.current.value.toString()
        const enteredPassword = passwordInputRef.current.value.toString()
        const entered = {
            'name': enteredName,
            'email': enteredEmail,
            'password': enteredPassword
        }
        const user = JSON.stringify(entered)
        addUser(user);

    }
    return (
        <form className="w-50 mx-auto">
            <input ref={nameInputRef} type="text" className="form-control my-3" name="name" placeholder="Name" />
            <input ref={emailInputRef} type="email" className="form-control my-3" name="email" placeholder="Email" />
            <input ref={passwordInputRef} type="password" className="form-control my-3" name="password" placeholder="Password" />
            <input type="submit" className="btn btn-primary w-100" onClick={registerUser} />

        </form>
    )
}

export default RegisterForm
