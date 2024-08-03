import { Routes, Route } from "react-router-dom";

// import DriverInfo from "../components/DriverInfo";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            {/* <DriverInfo /> */}
            <LandingPage />
        </>
    );
};

export default App;
