import "./App.css"
import MovieCard from "./Components/MovieCard.tsx";
function App(){
    const movieNumber=1;

    return(
        <>
            {movieNumber===1 ? (
                <MovieCard movie={{title: "Tim", date: "2024"}}/>
            ):(
             <MovieCard movie={{title: "Wall-E", date: "2012"}}/>
                )
            }
        </>
    );
}

export default App;