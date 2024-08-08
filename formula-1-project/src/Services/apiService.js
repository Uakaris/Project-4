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

// TODO: Complete this functionality

// const getLapData = async () => {
//     const BASE_URL = "https://api.openf1.org/v1/laps";

//     try {
//         const response = await fetch(
//             BASE_URL + "?session_key=latest&driver_number=1"
//         );

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching lap data", error);
//     }
// };

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

const getConstructorStandings = async () => {
    const BASE_URL =
        "http://ergast.com/api/f1/current/constructorStandings.json";

    try {
        const response = await fetch(BASE_URL);
        let data = await response.json();

        data = data["MRData"];
        data = data["StandingsTable"];
        data = data["StandingsLists"];
        data = data[0]["ConstructorStandings"];
        return data;
    } catch (error) {
        console.error("Error fetching constructor standings:", error);
    }
};

// getConstructorStandings().then((constructorStandings) => {
//     console.log(constructorStandings);
// });

const getLatestRaceResults = async () => {
    const BASE_URL = "http://ergast.com/api/f1/current/last/results.json";
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        const raceData = data.MRData.RaceTable.Races;
        const resultsData = raceData[0].Results;

        return { raceData, resultsData };
    } catch (error) {
        console.error("Error fetching race results:", error);
    }
};

getLatestRaceResults().then((latestRaceResults) => {
    console.log(latestRaceResults);
});

export {
    getAllDriversData,
    getDriverStandings,
    getConstructorStandings,
    getLatestRaceResults,
};
