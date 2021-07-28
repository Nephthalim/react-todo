import React, { useRef, useState } from 'react'
import { useHistory, Redirect } from 'react-router';


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

    const pushRegister = () => {
        history.push('/register');
    }

    return (
        <div>
            <form className="w-50 mx-auto">

                <input ref={emailInputRef} type="email" className="form-control my-3" name="email" placeholder="Email" />
                <input ref={passwordInputRef} type="password" className="form-control my-3" name="password" placeholder="Password" />
                <input type="submit" className="btn btn-primary w-100 my-3" onClick={loginUserHandler}/>
                <button type="button" className="btn btn-success w-100 my-3" onClick={pushRegister}>Register</button>

            </form>
        </div>
    )
}

export default LoginForm
