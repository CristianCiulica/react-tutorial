import MovieCard from "../Components/MovieCard.tsx";
import {useState} from "react";

function Home(){

    const[searchQuery, setSearchQuery] = useState("");

    const movies=[
        {id:1, title: "John Wick", date: "2021"},
        {id:2, title: "John Wick 2", date: "2024"},
        {id:3, title: "John Wick 3", date: "2026"}
    ]
const handleSearch=() =>{
        alert(searchQuery);
}

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" onChange={(e)=>setSearchQuery(e.target.value)} placeholder="search a movie..." value={searchQuery} className="search-input"></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie =><MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}
export default Home;