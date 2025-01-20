import MovieList from "./views/MovieList";
import Banner from "./views/Banner";
import Header from "./views/Header"; 
import "./index.css"

const App = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Banner/>
                <h2>New Realease</h2>
                <MovieList />
            </main>
        </>
    )
}



export default App