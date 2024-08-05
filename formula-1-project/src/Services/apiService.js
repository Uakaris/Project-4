// const BASE_URL = 'https://api.openf1.org';

// const getDriverList = async () => {
//     try {
//         const response = await fetch('https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158');
//         console.log(response);
//         return response.map(driver => ({
//             id:driver.driverId,
//             name: `${driver.full_name} ${driver.headhshot_url}`
//         }));
//     } catch (error) {
//         console.log(error);
//     }
// };

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
getLapData().then((allLapData) => {
    console.log(allLapData);
});

// function for original testing to get all data on all drivers.

// getAllDriversData().then((allDriversData) => {
//     // console.log(allDriversData);
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

export { getAllDriversData, getLapData };
