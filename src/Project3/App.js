import React, { useState, } from 'react'
import LoginForm from './LoginForm'
import Dashborad from './Dashborad'


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginH = () => {
        const loginStatus = localStorage.getItem('isLoggedIn')
        if (loginStatus === '1') {
            setIsLoggedIn(false)
            localStorage.setItem('isLoggedIn', '0')
            return
        }
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', '1')

    }

    const logoutH = (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', '0')
    }

    return (
        <React.Fragment>
            {
                isLoggedIn && <Dashborad loginHandler={logoutH} />
            }
            {
                !isLoggedIn && <LoginForm loginHandler={loginH} />
            }
        </React.Fragment>
    )
}

export default App