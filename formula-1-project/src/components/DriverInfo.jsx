import { useState, useEffect } from "react";

import * as apiService from "../Services/apiService";
import DriverList from "./driverList";
import "../components/DriverInfo.css";

const DriverInfo = () => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.getAllDriversData();
                setDrivers(data || []); // Set to empty array if data is undefined or null
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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
        <main className="drivers">
            <h1 className="DriversHeading">2024 Drivers</h1>
            <DriverList drivers={drivers} />
        </main>
    );
};

export default DriverInfo;
