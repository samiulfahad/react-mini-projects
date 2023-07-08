import { useContext } from "react"

import { Context } from "./context"
import Movie from "./Movie"

const MovieList = props => {
    const ctx = useContext(Context)
    const list = ctx.movies.map(movie => <Movie key={movie.id} title={movie.title} movieId={movie.id}
        releaseYear={movie.releaseYear} leadCharacters={movie.leadCharacters} />)
    return (
        <ul className="bg-white p-10 w-1/2 divide-y-2 flex flex-col justify-start items-center">
            {list}
        </ul>
    )
}

export default MovieList