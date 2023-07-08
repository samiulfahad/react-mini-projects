import { useContext, useRef } from "react"
import Input from "./Input"
import { Context } from "./context"

const MovieForm = props => {
    const ctx = useContext(Context)
    const titleRef = useRef()
    const ratingRef = useRef()
    const releaseRef = useRef()
    const charRef = useRef()

    const onSubmit = (event) => {
        event.preventDefault()
        const movie ={
            title: titleRef.current.value,            rating: ratingRef.current.value,
            releaseYear: releaseRef.current.value,    leadCharacters: charRef.current.value
        }
        ctx.addNewMovie(movie)
    }
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-lg z-20 flex justify-center items-center">
            <div className="-mt-20 py-20 mx-4 bg-white px-10 md:px-32 rounded-md">
                <form onSubmit={(event) => onSubmit(event)} className="flex flex-col flex-wrap space-y-4 justify-center items-center w-full">
                    <div>
                        <Input label="Title" type="text" ref={titleRef} />
                        <Input label="Rating" type="number" ref={ratingRef} />
                        <Input label="Release Year" type="number" ref={releaseRef} />
                        <Input label="Characters" type="text" ref={charRef} />
                    </div>
                    <div className="flex justify-between items-center space-x-6">
                        <button onClick={ctx.movieFormVisibility} className="px-6 py-1 font-bold rounded-2xl border-2 border-blue-500 bg-white text-black hover:text-blue-500 hover:bg-transparent duration-300">Close</button>
                        <button type="submit" className="px-6 py-1 font-bold rounded-2xl border-2 border-blue-500 bg-blue-600 text-white hover:text-blue-500 hover:bg-transparent duration-300">Add</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default MovieForm