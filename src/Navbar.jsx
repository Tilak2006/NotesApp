import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
    <>
    <div className="navbar">
        <nav>
            <ul>
            <li><Link to="/">HOME</Link></li>
          <li><Link to="/create">CREATE</Link></li>
          <li><Link to="/notes">NOTES</Link></li>
          <li><Link to="/draw">DRAW</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
            </ul>
        </nav>
    </div>
    </>
    );
}

export default Navbar