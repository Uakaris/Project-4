const DriverCard = ({ driver }) => {
    return (
        <li>
            <h2>{driver.full_name || 'No name available'}</h2>
            <p>Number: {driver.driver_number || 'N/A'}</p>
            <p>Team: {driver.team_name || 'N/A'}</p>
            <img src={driver.headshot_url || 'default-image-url'} alt={driver.full_name || 'Driver'} />
        </li>
    );
};

export default DriverCard;