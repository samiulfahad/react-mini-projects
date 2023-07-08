import React, { useState, useEffect, useCallback} from 'react'
import LoginForm from './LoginForm'
import Dashborad from './Dashborad'


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const myFunc = useCallback( () => {
    }, [])
    useEffect(()=>{
        myFunc()
        console.log('useEffect running in app comp........');
        const loginStatus = localStorage.getItem('isLoggedIn')
        if(loginStatus === '1'){
            setIsLoggedIn(true)
        }
    }, [myFunc])

    const authH = () => {
        const loginStatus = localStorage.getItem('isLoggedIn')
        if (loginStatus === '1') {
            localStorage.setItem('isLoggedIn', '0')
            setIsLoggedIn(false)
            return
        }
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return (
        <React.Fragment>
            {
                isLoggedIn && <Dashborad loginHandler={authH} />
            }
            {
                !isLoggedIn && <LoginForm loginHandler={authH} />
            }
        </React.Fragment>
    )
}

export default App