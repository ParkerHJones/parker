import { Link } from "react-router-dom";
import "./style.css"; 

const NavBar = () => {
    return <nav className="navbar">
    <div className="nav-wrapper">
    <div className="logo">
    </div>
        <div className="list-wrapper">
     <ul>
         <li>
             <Link to="/" > Home </Link>
         </li>
         <li>
             <Link to="/about" > About </Link>
         </li>
         <li>
             <Link to="/education"> Education</Link>
         </li>
         <li>
             <Link to="/tennis"> Tennis</Link>
         </li>
         <li>
             <Link to="/resume" > Resume </Link>
         </li>
         <li>
             <Link to="/skills" > Skills </Link>
         </li>
         <li>
             <Link to="/contact" > Contact </Link>
         </li>
     </ul>
        </div>
    </div>
    </nav>; 
};

export default NavBar; 