import { useState, useEffect } from "react";

import * as apiService from "../Services/apiService";
import DriverStandingsList from "./StandingsCharts";

const DriverStandingsInfo = () => {
    const [driverStandings, setDriverStandings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDriverStandings = async () => {
            try {
                const data = await apiService.getDriverStandings();
                const standings = data;
                setDriverStandings(standings);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchDriverStandings();
    }, []);
    if (loading)
        return (
            <div className="LoadingContainer">
                <p>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                </p>
            </div>
        );
    if (error)
        return (
            <div className="ErrorContainer">
                <p>
                    <i className="fa-solid fa-triangle-exclamation fa-beat"></i>:{" "}
                    {error}
                </p>
            </div>
        );
    return (
        <main>
            <h1>Driver Standings</h1>
            <DriverStandingsList driverStandings={driverStandings} />
        </main>
    );
};

export default DriverStandingsInfo;
