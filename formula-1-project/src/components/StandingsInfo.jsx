import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import * as apiService from "../Services/apiService";
import DriverStandingsList from "./StandingsCharts";
import ConstructorStandingsList from "./ConstructorStandingsCharts";

const DriverStandingsInfo = () => {
    const [driverStandings, setDriverStandings] = useState([]);
    const [constructorStandings, setConstructorStandings] = useState([]);
    const [selectedChart, setSelectedChart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const path = window.location.pathname;
    console.log(path);

    useEffect(() => {
        const fetchStandingsData = async () => {
            try {
                const DriversData = await apiService.getDriverStandings();
                const driverStandings = DriversData;
                setDriverStandings(driverStandings);

                const constructorsData =
                    await apiService.getConstructorStandings();
                const constructorStandings = constructorsData;
                setConstructorStandings(constructorStandings);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchStandingsData();
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
                    <i className="fa-solid fa-triangle-exclamation fa-beat"></i>
                </p>
            </div>
        );
    return (
        <div className="ButtonsContainer">
            {selectedChart === null && (
                <div className="ChartToggleButtons">
                    <button
                        className="StandingsButtons"
                        onClick={() => setSelectedChart("drivers")}
                    >
                        2024 Driver Standings
                    </button>
                    <button
                        className="StandingsButtons"
                        onClick={() => setSelectedChart("constructors")}
                    >
                        2024 Constructor Standings
                    </button>
                </div>
            )}
            {selectedChart !== null && (
                <button onClick={() => setSelectedChart(null)}>Back</button>
            )}
            {selectedChart === "drivers" && driverStandings.length > 0 && (
                <DriverStandingsList driverStandings={driverStandings} />
            )}
            {selectedChart === "constructors" &&
                constructorStandings.length > 0 && (
                    <ConstructorStandingsList
                        constructorStandings={constructorStandings}
                    />
                )}
        </div>
    );
};

export default DriverStandingsInfo;
