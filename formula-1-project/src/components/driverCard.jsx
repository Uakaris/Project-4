const DriverCard = ({ driver }) => {
    return (
        <li>
            <h2>{driver.full_name || "No name available"}</h2>
            <img
                src={driver.headshot_url || "default-image-url"}
                alt={driver.full_name || "Driver"}
            />
            <p>Driver Number: {driver.driver_number || "N/A"}</p>
            <p>Team: {driver.team_name || "N/A"}</p>
            <p>Country: {driver.country_code}</p>
        </li>
    );
};

export default DriverCard;
