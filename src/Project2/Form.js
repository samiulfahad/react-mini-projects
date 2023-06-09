import { useState, useRef } from 'react'
import ErrorModal from './errorModal'

const Form = props => {
    const nameRef = useRef()
    const ageRef = useRef()
    const [error, setError] = useState()

    const formHandler = event => {
        event.preventDefault()
        const name = nameRef.current.value
        const age = ageRef.current.value

        if (name.trim().length === 0 && age.trim().length === 0) {
            setError({ field: "Name and Age Required", msg: "Please Enter Name and Age" })
            return
        }

        if (name.trim().length === 0) {
            setError({ field: "Name Required", msg: "Please Enter Name" })
            return
        }

        if (age.trim().length === 0) {
            setError({ field: "Age Required", msg: "Please enter age" })
            return
        }

        if (parseInt(age) <= 0) {
            setError({ field: "Age Error", msg: "Age should be greater than zero" })
            return
        }

        props.add(name, age)
        nameRef.current.value = ''
        ageRef.current.value = ''
    }

    const onConfirm = _ => {
        setError()
    }

    return (
        <div className='relative'>
            {error && <ErrorModal onConfirm={onConfirm} title={error.field} message={error.msg} />}
            <form onSubmit={formHandler} className="max-w-4xl mx-auto px-8 py-4 flex flex-col justify-start items-center space-y-4">
                <div className="flex flex-col">
                    <label>Username: </label>
                    <input type="text" id="name" ref={nameRef} className="focus:outline-none rounded pl-2"></input>
                </div>
                <div className="flex flex-col">
                    <label>Age: </label>
                    <input type="number" ref={ageRef} id="age" className="focus:outline-none rounded pl-2"></input>
                </div>
                <button type="submit" className="mx-auto text-center bg-blue-400 rounded text-white font-bold px-2 py-1">Add User</button>
            </form>
        </div>
    )
}

export default Form