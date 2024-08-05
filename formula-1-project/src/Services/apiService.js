import xml2js from "xml2js";

const getAllDriversData = async () => {
    const BASE_URL = "https://api.openf1.org/v1/drivers";

    try {
        const response = await fetch(BASE_URL + "?session_key=latest");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching drivers data:", error);
    }
};

const getLapData = async () => {
    const BASE_URL = "https://api.openf1.org/v1/laps";

    try {
        const response = await fetch(
            BASE_URL + "?session_key=latest&driver_number=1"
        );

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching lap data", error);
    }
};

// Test function to get lap data -
// getLapData().then((allLapData) => {
//     console.log(allLapData);
// });

const getDriverStandings = async () => {
    const BASE_URL = "https://ergast.com/api/f1/current/driverStandings.json";

    try {
        const response = await fetch(BASE_URL);
        let data = await response.json();
        // Drill down into the data to get DriverStandings
        data = data["MRData"];
        data = data["StandingsTable"];
        data = data["StandingsLists"];
        data = data[0]["DriverStandings"];
        return data;
    } catch (error) {
        console.error("Error fetching driver standings:", error);
    }
};

// Test function to get driver standings - 

// getDriverStandings().then((driverStandings) => {
//     console.log(driverStandings);
// });

// function for original testing to get all data on all drivers.

// getAllDriversData().then((allDriversData) => {
//     console.log(allDriversData);
// });

// Below function was an attempt to get driver info from ergast api as they have drivers by seaon.
// May need to come back to this.

// getDriversBySeason = async () => {
//     const BASE_URL = 'http://ergast.com/api/f1';
//     try {
//         const response = await fetch(BASE_URL + '/2024/drivers');

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching driver data by season", error);
//     }
// };

export { getAllDriversData, getLapData, getDriverStandings };
