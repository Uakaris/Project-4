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
        const response = await fetch(BASE_URL + '?session_key=latest' );

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching drivers data:", error);
    }
};

// function to get all data on all drivers. Not sure how to filter this based on season from this api
getAllDriversData().then((allDriversData) => {
    // console.log(allDriversData);
});

export { getAllDriversData };
