import { Link } from "react-router-dom";

import "../components/NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">F1 Focus</Link>
                </li>
                <li>
                    <Link to="/driverInfo">Drivers</Link>
                </li>
                <li>
                    <Link to="/latestRaceResults">Results</Link>
                </li>
                <li>
                    <Link to="/standings">Standings</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
