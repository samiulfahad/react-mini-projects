import { forwardRef } from "react"

const Input = forwardRef( (props, ref) => {
    return (
        <div className="flex flex-wrap justify-center md:justify-between items-center w-full py-1 md:py-2 md:space-x-10">
            <label>{props.label}:</label>
            <input ref={ref} className="px-2 py-1 border-2 rounded-lg" type={props.type} />
        </div>
    )
})

export default Input