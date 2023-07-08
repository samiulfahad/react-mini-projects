import { useState } from "react"

const useHook = _ =>{
    const [load, setLoad] = useState(true)
    return [load, setLoad]
}

export default useHook