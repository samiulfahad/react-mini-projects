import { useContext } from "react"
import { Context } from "./context"

const Movie = props => {
    const { editMovie } = useContext(Context)
    let characters = props.leadCharacters.trim()

    return (
        <li className="flex w-full justify-center items-center py-4">
            <div className="flex flex-col w-full justify-center items-center py-4">
                <p>Movie Name: <span className="font-bold italic">{props.title}</span> </p>
                <p>Released: <span className="font-semibold italic">{props.releaseYear}</span> </p>
                <p>characters: <span className="font-semibold italic">{characters}</span> </p>

            </div>
            <button onClick={() => editMovie(props.movieId)} className="px-2 py-1 bg-blue-500 text-white hover:bg-white hover:text-black font-bold border-2 border-blue-500 rounded-lg">Edit</button>
        </li>
    )
}

export default Movie