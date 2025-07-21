import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <div className="product-brand">
                <h2>Movie Explorer</h2>
            </div>
            <div className="links">
                <li><Link to="/" className="Link">Home</Link></li>
                <li><Link to="/favorites" className="Link">Favorites</Link></li>
            </div>
        </nav>
    );
}
export default NavBar;