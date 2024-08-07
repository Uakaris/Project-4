import "../components/LatestRaceResultsCard.css";

const LatestRaceResultsCard = ({ results, race, driver }) => {
    const formatConstructorId = (id) => {
        if (!id) return "N/A";

        const replacedId = id.replace(/_/g, " ");

        const capitalisedId = replacedId
            .split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");

        return capitalisedId;
    };
    return (
        <li className="LatestRaceResultsCard">
            <h2>{results.position || "No position info available"}</h2>
            {/* <img
                    src={driver.headshot_url || "default-image-url"}
                    alt={driver.full_name || "Driver"}
                /> */}
            <p>
                <strong>
                    {results.Driver.givenName || "N/A"}{" "}
                    {results.Driver.familyName || "N/A"} -{" "}
                    {formatConstructorId(results.Constructor.constructorId) ||
                        "N/A"}
                </strong>
            </p>
            <p>
                <strong>Points: </strong>
                {results.points || "N/A"}
            </p>
            <p>
                <strong>Number: </strong>
                {results.number || "N/A"}
            </p>
            <p>
                <strong>Starting Position: </strong>
                {results.grid || "N/A"}
            </p>
            <p>
                <strong>Status: </strong>
                {results.status || "N/A"}
            </p>
            <p>
                <strong>Laps Completed: </strong>
                {results.laps || "N/A"}
            </p>
        </li>
    );
};

export default LatestRaceResultsCard;
