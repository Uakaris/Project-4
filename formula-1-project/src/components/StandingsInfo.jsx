import { useState, useEffect } from "react";

import * as apiService from "../Services/apiService";
import DriverStandingsList from "./StandingsCharts";

const DriverStandingsInfo = () => {
    const [driverStandings, setDriverStandings] = useState([]);

    useEffect(() => {
        const fetchDriverStandings = async () => {
            const data = await apiService.getDriverStandings();
            const standings = data;
            setDriverStandings(standings);
        };
        fetchDriverStandings();
    }, []);

    return (
        <main>
            <h1>Driver Standings</h1>
            <DriverStandingsList driverStandings={ driverStandings } />
        </main>
    );
};

export default DriverStandingsInfo;
