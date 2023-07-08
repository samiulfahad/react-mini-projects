import { useState } from "react"

const useValidation = (validate, errorMessage) => {
    const [value, setValue] = useState('')
    const [validity, setValidity] = useState(true)
    const [touched, setTouched] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const inputHandler = event => {
        setTouched(true)
        setValue(event.target.value)
        if (validate(event.target.value.trim())) {
            setValidity(false)
            setErrMsg(errorMessage)
            return
        } else {
            setErrMsg('')
            setValidity(true)
        }  
    } 
    
    const inputBlur = event => {
        setValue(event.target.value)
        if (validate(event.target.value.trim())) {
            setValidity(false)
            setErrMsg(errorMessage)
            return
        } else {
            setValidity(true)
            setErrMsg('')
        }
    }
    return {value, setValue, validity, touched, setTouched, inputBlur, inputHandler, errMsg}
    
}


export default useValidation