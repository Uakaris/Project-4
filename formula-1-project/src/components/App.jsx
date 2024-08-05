import { Routes, Route } from "react-router-dom";

import { getAllDriversData, getDriverStandings } from "../Services/apiService";
import DriverInfo from "../components/DriverInfo";
import DriverStandingsInfo from "../components/StandingsInfo";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import About from "../components/About";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/driverInfo"
                    element={
                        <DriverInfo getAllDriversData={getAllDriversData} />
                    }
                />
                <Route
                    path="/driverStandings"
                    element={
                        <DriverStandingsInfo
                            getDriverStandings={getDriverStandings}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
