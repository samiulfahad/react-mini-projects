import MovieProvider from "./context"
import Main from "./Main"

const App = props => {

    return (
        <MovieProvider>
            <Main />
        </MovieProvider>
    )
}
export default App