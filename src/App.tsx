import "./App.css"
import Home from "./Pages/Home.tsx";
import {Routes, Route} from "react-router-dom";
import Favorites from "./Pages/Favorites.tsx";
function App(){
    return(
        <main className="main-content">
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/favorites" element={<Favorites/>}></Route>
           </Routes>
        </main>
    );
}

export default App;