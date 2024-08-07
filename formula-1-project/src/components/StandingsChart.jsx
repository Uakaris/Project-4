// const DriverStandingsChart = ({ driver }) => {
//     return (
//         <li className="DriverStandingsCard">
//             <h2>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</h2>
//             <p>
//                 <strong>Position:</strong> {driver.position}
//             </p>
//             <p>
//                 <strong>Points:</strong> {driver.points}
//             </p>
//             <p>
//                 <strong>Wins:</strong> {driver.wins}
//             </p>
//             <p>
//                 <strong>Driver ID:</strong> {driver.Driver.driverId}
//             </p>
//         </li>
//     );
// };

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useMemo } from "react";

// Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const driverColors = {
    33: { backgroundColor: "#3671C6" },
    4: { backgroundColor: "#FF8000" },
    16: { backgroundColor: "#E80020" },
    81: { backgroundColor: "#FF8000" },
    55: { backgroundColor: "#E80020" },
    44: { backgroundColor: "#27F4D2" },
    11: { backgroundColor: "#3671C6" },
    63: { backgroundColor: "#27F4D2" },
    14: { backgroundColor: "#229971" },
    18: { backgroundColor: "#229971" },
    27: { backgroundColor: "#B6BABD" },
    22: { backgroundColor: "#6692FF" },
    3: { backgroundColor: "#6692FF" },
    38: { backgroundColor: "#E80020" },
    10: { backgroundColor: "#0093cc" },
    20: { backgroundColor: "#B6BABD" },
    31: { backgroundColor: "#0093cc" },
    23: { backgroundColor: "#64C4FF" },
    2: { backgroundColor: "#64C4FF" },
    24: { backgroundColor: "#52E252" },
    77: { backgroundColor: "#52E252" },
};

const DriverStandingsChart = ({ driverStandings }) => {
    const chartData = useMemo(() => {
        const labels = driverStandings.map(
            (driver) => `${driver.Driver.givenName} ${driver.Driver.familyName}`
        );
        const data = driverStandings.map((driver) => driver.points);

        const colors = driverStandings.map(
            (driver) =>
                driverColors[`${driver.Driver.permanentNumber}`] || {
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                }
        );

        return {
            labels,
            datasets: [
                {
                    label: "Driver Points",
                    data,
                    backgroundColor: colors.map(
                        (color) => color.backgroundColor
                    ),
                },
            ],
        };
    }, [driverStandings]);

    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: " 2024 Driver Standings",
                        },
                    },
                }}
            />
        </div>
    );
};

export default DriverStandingsChart;
