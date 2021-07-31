import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router';
import { Link, Redirect } from 'react-router-dom';


const LoginForm = ({ loginUser }) => {
    const [errorMessage, setErrorMessage] = useState("")
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const loginUserHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        const entered = {
            "email": enteredEmail,
            "password": enteredPassword
        }
        const user = JSON.stringify(entered)
        loginUser(user, setErrorMessage);

    }

    const toRegister = () => {
        history.push('/register')
    }


    return (
        <div>
            <form className="w-50 mx-auto">

                <input ref={emailInputRef} type="email" className="form-control my-3" name="email" placeholder="Email" />
                <input ref={passwordInputRef} type="password" className="form-control my-3" name="password" placeholder="Password" />
                <input type="submit" className="btn btn-primary w-100 my-3" onClick={loginUserHandler} />
                <Link to="/register">
                    <button type="button" className="btn btn-success w-100 my-3">Register</button>
                </Link>

            </form>
        </div>
    )
}

export default LoginForm
