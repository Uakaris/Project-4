const LatestRaceResultsCard = ({ results, driver }) => {
    return (
        <li className="LatestRaceResultsCard">
            <h2>{results.position || "No position info available"}</h2>
            <img
                src={driver.headshot_url || "default-image-url"}
                alt={driver.full_name || "Driver"}
            />
            <p>
                <strong>Points:</strong>
                {results.points || "N/A"}
            </p>
            <p>
                <strong>Number:</strong>
                {results.number || "N/A"}
            </p>
            <p>
                <strong>Starting Position:</strong>
                {results.grid || "N/A"}
            </p>
            <p>
                <strong>Status:</strong>
                {results.status || "N/A"}
            </p>
            <p>
                <strong>Laps Completed:</strong>
                {results.laps || "N/A"}
            </p>
        </li>
    );
};

export default LatestRaceResultsCard;