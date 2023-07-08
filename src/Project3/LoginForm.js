import React, { useState, useEffect, useReducer } from 'react'

const emailReducer = (state, action) => {
    if (action.type === 'NEW_EMAIL') {
        return { value: action.val, isValid: action.val.includes('@') }
    }
}
const passReducer = (state, action) => {
    if (action.type === 'NEW_PASS') {
        return { value: action.val, isValid: action.val.length >= 5 }
    }
}

const LoginForm = props => {
    const [formValidity, setFormValidity] = useState(false)
    const [email, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
    const [password, dispatchPass] = useReducer(passReducer, { value: '', isValid: null })

    useEffect(() => {
        setFormValidity(email.isValid && password.isValid)
    }, [email.isValid, password.isValid])

    const emailH = (e) => {
        dispatchEmail({ type: 'NEW_EMAIL', val: e.target.value })
    }
    const passwordH = (e) => {
        dispatchPass({ type: 'NEW_PASS', val: e.target.value })
    }
    const loginH = e => {
        e.preventDefault()
        props.loginHandler()
    }

    return (
        <React.Fragment>
            <form onSubmit={loginH} className='flex flex-col justify-center items-center h-screen'>
                <div className='-mt-40 text-2xl font-semibold py-8'>
                    <p>Login</p>
                </div>

                <div className='flex flex-col'>
                    <label>Email: </label>
                    <input value={email.value} onChange={emailH} type='text'
                        className={`focus:outline-none px-2 rounded-lg border-2 border-blue-600 ${email.isValid === false ? "border-red-500" : ""}`}></input>
                </div>

                <div className='flex flex-col'>
                    <label>Password: </label>
                    <input value={password.value} onChange={passwordH} id="password" type='password'
                        className={`focus:outline-none px-2 rounded-lg border-2 border-blue-600 ${password.isValid === false ? "border-red-500" : ""}`}></input>
                </div>

                <button type='submit' className={`mt-4 bg-blue-500 px-4 py-1 rounded text-white font-bold ${formValidity ? " " : "pointer-events-none bg-gray-300 text-black"}`}>Login</button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm