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

const constructorColors = {
    "Red Bull": { backgroundColor: "#3671C6" },
    Ferrari: { backgroundColor: "#E80020" },
    McLaren: { backgroundColor: "#FF8000" },
    Mercedes: { backgroundColor: "#27F4D2" },
    "Aston Martin": { backgroundColor: "#229971" },
    "RB F1 Team": { backgroundColor: "#6692FF" },
    "Haas F1 Team": { backgroundColor: "#B6BABD" },
    "Alpine F1 Team": { backgroundColor: "#0093cc" },
    Williams: { backgroundColor: "#64C4FF" },
    Sauber: { backgroundColor: "#52E252" },
};

const ConstructorStandingsChart = ({ constructorStandings }) => {
    const chartData = useMemo(() => {
        const labels = constructorStandings.map(
            (constructor) => constructor.Constructor.name
        );

        const data = constructorStandings.map(
            (constructor) => constructor.points
        );

        const colors = constructorStandings.map(
            (constructor) =>
                constructorColors[constructor.Constructor.name] || {
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                }
        );

        return {
            labels,
            datasets: [
                {
                    label: "Constructor Points",
                    data,
                    backgroundColor: colors.map(
                        (color) => color.backgroundColor
                    ),
                    // borderColor: "#04d9ff",
                    // borderWidth: 2,
                    fontFamily: "orbitron",
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
