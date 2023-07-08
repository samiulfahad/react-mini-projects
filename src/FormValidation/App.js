import { useState, useEffect } from "react"
import useValidation from "./hook"

const App = props => {
    const {
        value: name,
        setValue: setName,
        validity: nameValidity,
        touched: nameTouched,
        setTouched: setNameTouched,
        inputBlur: nameBlur,
        inputHandler: nameHandler,
        errMsg: nameErrMsg
    } = useValidation((value => value === ""), "Please enter your name")

    const {
        value: age,
        setValue: setAge,
        touched: ageTouched,
        setTouched: setAgeTouched,
        validity: ageValidity,
        inputBlur: ageBlur,
        inputHandler: ageHandler,
        errMsg: ageErrMsg
    } = useValidation((value => isNaN(parseInt(value))), "Enter number")

    const [formValidity, setFormValidity] = useState(false)

    useEffect(() => {
        if (nameTouched && nameValidity && ageTouched && ageValidity) {
            setFormValidity(true)
        } else {
            setFormValidity(false)
        }
    }, [nameValidity, nameTouched, ageTouched, ageValidity])

    const formHandler = event => {
        event.preventDefault()
        if (!nameValidity) {
            return
        }
        setNameTouched(false)
        setName('')
        setAgeTouched(false)
        setAge('')
    }

    const nameInputBorder = nameValidity ? '' : 'border-rose-600'
    const ageInputBorder = ageValidity ? '' : 'border-rose-600'
    const formCss = formValidity ? "border-blue-500 hover:text-black" : "text-black border-gray-500 bg-gray-500 hover:bg-gray-500"

    return (
        <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-md z-10 flex justify-center items-center">
            <div className="p-10 -mt-20 bg-white z-20 rounded-md">
                <form onSubmit={formHandler} className="flex flex-col justify-center space-y-4">
                    <div className="flex justify-between space-x-4">
                        <label className="font-bold">Name</label>
                        <div>
                            <input onChange={nameHandler} onBlur={nameBlur} value={name} className={ nameInputBorder + " border-2 px-2 py-1 rounded-lg"} />
                            {nameErrMsg ? <p className="text-[12px] text-rose-500 font-bold">{nameErrMsg}</p> : ''}
                        </div>
                    </div>
                    <div className="flex justify-between space-x-4">
                        <label className="font-bold">Age</label>
                        <div>
                            <input onChange={ageHandler} onBlur={ageBlur} value={age} className={ ageInputBorder + " border-2 px-2 py-1 rounded-lg"} />
                            {ageErrMsg ? <p className="text-[12px] text-rose-500 font-bold">{ageErrMsg}</p> : ''}
                        </div>
                    </div>
                    <div className="mx-auto">
                        <button type="submit" disabled={!formValidity} className={"px-4 py-2 bg-blue-500 font-bold text-white hover:bg-white border-2 duration-300 rounded-lg border-blue-500 " + formCss}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App