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

const ConstructorStandingsChart = ({ constructorStandings }) => {
    const chartData = useMemo(() => {
        const labels = constructorStandings.map(
            (constructor) => constructor.Constructor.name
        );

        const data = constructorStandings.map((constructor) => constructor.points);

        return {
            labels,
            datasets: [
                {
                    label: "Constructor Points",
                    data,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "#04d9ff",
                    borderWidth: 3,
                },
            ],
        };
    }, [constructorStandings]);

    return (
        <div className="ChartContainer">
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: " 2024 Constructor Standings",
                        },
                    },
                }}
            />
        </div>
    );
};

export default ConstructorStandingsChart;
