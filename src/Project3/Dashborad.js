import React from 'react'

export default function Dashborad(props) {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <p>You Are Loggedin</p>
        <button onClick={props.loginHandler} className='mt-4 bg-blue-500 px-4 py-1 rounded text-white font-bold'>Logout</button>
    </div>
  )
}
