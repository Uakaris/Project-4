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

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useMemo } from 'react';

// Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DriverStandingsChart = ({ driverStandings }) => {
    const chartData = useMemo(() => {
        const labels = driverStandings.map(driver => `${driver.Driver.givenName} ${driver.Driver.familyName}`);
        const data = driverStandings.map(driver => driver.points);

        return {
            labels,
            datasets: [
                {
                    label: 'Driver Points',
                    data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: '#04d9ff',
                    borderWidth: 3,
                },
            ],
        };
    }, [driverStandings]);

    return (
        <div className="ChartContainer">
            <Bar data={chartData} options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Driver Standings',
                    },
                },
            }} />
        </div>
    );
};

export default DriverStandingsChart;
