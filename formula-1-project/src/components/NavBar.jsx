import { Link } from "react-router-dom";

import "../components/NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>F1 LapInsights</Link></li>
                <li><Link to='/graphStats'>Compare Laps</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;