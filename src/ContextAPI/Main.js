
import { useContext, Fragment } from "react";

import { Context } from "./context";
import Loading from "./Loading";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

const Main = (props) => {
    const { loading, error, movies, showMovieForm, movieFormVisibility, deleteAll } = useContext(Context)

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex justify-center items-center w-full space-x-4">
            <button onClick={movieFormVisibility} className="px-6 py-3 text-center text-white bg-blue-400 rounded-md mt-10 font-bold">Add New Movie</button>
            <button onClick={deleteAll} className="px-4 py-3 text-center text-white bg-red-400 rounded-md mt-10 font-mono">Delete All</button>

            </div>
            {!error && loading && <Loading />}
            {error && !loading && <p className="px-10 text-center text-red-500 font-bold">{error}</p>}
            {!loading && movies.length > 0 && <MovieList movies={movies} />}
            {!error && !loading && movies.length ===0 && <p className="text-lg font-bold">No movie found to display</p>}
            {showMovieForm && <MovieForm />}
        </div>
    )
}

export default Main