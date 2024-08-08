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
                Number: <strong>{driver.driver_number || "N/A"}</strong> 
            </p>
            <p>
                Team: <strong>{driver.team_name || "N/A"}</strong>
            </p>
            <p>
                Country: <strong>{driver.country_code}</strong>
            </p>
        </li>
    );
};

export default DriverCard;
