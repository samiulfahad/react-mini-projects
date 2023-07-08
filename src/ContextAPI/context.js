import { useState, useEffect, useCallback, createContext } from "react";
import axios from "axios";

export const Context = createContext({ 
    addNewMovie: () => { }, 
    getMovies: () => {},
    movieFormVisibility: () => {},
    editMovie: () => {}
})

const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [showMovieForm, setShowMovieForm] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const url = 'http://localhost:3000'
    const getMovies = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get(url + '/movie/all')
            const list = response.data.movies.map(movie => {
                return {
                    id: movie._id,
                    title: movie.title,
                    releaseYear: movie.year,
                    leadCharacters: movie.leadCharacters
                }
            })
            setMovies(list)
        } catch (e) {
            setError('Could not connect to server')
        }
        finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getMovies()
    }, [getMovies])



    const movieFormVisibility = () => {
        setShowMovieForm(oldState => !oldState)
    }
    const addNewMovie = async (movie) => {
        setError(false)
        setLoading(true)
        try {
            await axios.post(url + '/movie/add', movie)
        } 
        catch (err){
            if(err.response){
                setError(err.response.data.message)
            } else {
                console.log('errr setting');
                setError('Could not connect to server')
            }
        }
        finally {
            setLoading(false)
            setShowMovieForm(false)
            getMovies()
        } 
    }

    const editMovie = id => {
        alert(id)
    }

    const deleteAll = async () => {
        setLoading(true)
        try{
            await axios.delete(url+ '/movie/deleteAll')
            getMovies()
        }
        catch(err) {
            console.log(err);
            if(err.response.data.message){
                setError(err.response.data.message)
            } else {
                setError('Could not connect to server')
            }
        }
        finally {
            setLoading(false)
        }
    }

    const contextVal = {movieFormVisibility, addNewMovie, getMovies, editMovie, deleteAll, loading, showMovieForm, error, movies}
    return (
        <Context.Provider value={contextVal}>
            {props.children}
        </Context.Provider>
    )
}

export default MovieProvider