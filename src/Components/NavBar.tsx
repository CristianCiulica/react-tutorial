import {Link} from "react-router-dom";

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" >MovieApp</Link>
        </div>

    </nav>
}

export default NavBar;