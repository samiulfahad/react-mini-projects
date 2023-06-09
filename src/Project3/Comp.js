import { useEffect } from "react"

const Comp = (props) => {
    useEffect(()=>{
        console.log('useEffect running......');
        return () => {
            console.log('Cleanup......');
        }
    })
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center h-40 w-40 bg-indigo-400">
                <p>Hii</p>
            </div>
        </div>
    )
}

export default Comp