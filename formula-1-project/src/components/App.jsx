import { Routes, Route } from "react-router-dom";

import { getAllDriversData } from "../Services/apiService";
import DriverInfo from "../components/DriverInfo";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import About from "../components/About";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
              <Route path="/" element={ <LandingPage /> } />
              <Route path="/graphStats" element={ <DriverInfo getAllDriversData={getAllDriversData} /> } />
              <Route path="/about" element={ <About /> } />
            </Routes>
        </>
    );
};

export default App;
