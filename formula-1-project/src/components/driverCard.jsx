import "../components/driverCard.css";

const DriverCard = ({ driver }) => {
    return (
        <li className="DriverCard">
            <h2>{driver.full_name || "No name available"}</h2>
            <img
                src={driver.headshot_url || "default-image-url"}
                alt={driver.full_name || "Driver"}
            />
            <p>
                <strong>Number:</strong> {driver.driver_number || "N/A"}
            </p>
            <p>
                <strong>Team:</strong> {driver.team_name || "N/A"}
            </p>
            <p>
                <strong>Country:</strong> {driver.country_code}
            </p>
        </li>
    );
};

export default DriverCard;
