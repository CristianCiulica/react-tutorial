import MovieCard from "../Components/MovieCard.tsx";

function Home(){

    const movies=[
        {id:1, title: "John Wick", date: "2021"},
        {id:2, title: "John Wick 2", date: "2024"},
        {id:3, title: "John Wick 3", date: "2026"}
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie =><MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}
export default Home;