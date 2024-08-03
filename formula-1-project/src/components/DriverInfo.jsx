import { useState, useEffect } from "react";

import * as apiService from "../Services/apiService";
import DriverList from "./driverList";

const DriverInfo = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.getAllDriversData();
            setDrivers(data || []); // Set to empty array if data is undefined or null
        };
        fetchData();
    }, []);

    return (
        <main>
            <h1>Drivers</h1>
            <DriverList drivers={drivers} />
        </main>
    );
};

export default DriverInfo;
