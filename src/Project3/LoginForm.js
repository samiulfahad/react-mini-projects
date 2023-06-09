
import React, { useState, useEffect } from 'react'

export default function LoginForm(props) {
    const [formValidity, setFormValidity] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordValidity, setPasswordValidity] = useState(true)
    const [emailValidity, setEmailValidity] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormValidity(email.includes('@') && password.length > 5)
            console.log('before cleanup');
        }, 1000)
        return () => {
            clearTimeout(timer)
            console.log('Cleanup........');
        }
    }, [email, password])

    const emailH = (e) => {
        setEmail(e.target.value)
        if (e.target.value.includes('@')) {
            setEmailValidity(true)
        }
    }

    const passwordH = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length >= 5) {
            setPasswordValidity(true)
        }
    }


    const validateEmail = e => {
        if (!e.target.value.includes('@')) {
            setEmailValidity(false)
        }
    }
    const validatePassword = e => {
        if (e.target.value.length <= 5) {
            setPasswordValidity(false)
        }
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
                    <input value={email} onChange={emailH} onBlur={validateEmail} type='text'
                        className={`focus:outline-none px-2 rounded-lg border-2 ${emailValidity ? "border-blue-600" : "border-red-500"}`}></input>
                </div>

                <div className='flex flex-col'>
                    <label>Password: </label>
                    <input value={password} onChange={passwordH} onBlur={validatePassword} id="password" type='password'
                        className={`focus:outline-none px-2 rounded-lg border-2 ${passwordValidity ? "border-blue-600" : "border-red-500"}`}></input>
                </div>

                <button type='submit' className={`mt-4 bg-blue-500 px-4 py-1 rounded text-white font-bold ${formValidity ? " " : "pointer-events-none bg-gray-300 text-black"}`}>Login</button>
            </form>
        </React.Fragment>
    )
}

