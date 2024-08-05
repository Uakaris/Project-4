const DriverStandingsChart = ({ driver }) => {
    return (
        <li className="DriverStandingsCard">
            <h2>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</h2>
            <p>
                <strong>Position:</strong> {driver.position}
            </p>
            <p>
                <strong>Points:</strong> {driver.points}
            </p>
            <p>
                <strong>Wins:</strong> {driver.wins}
            </p>
            <p>
                <strong>Driver ID:</strong> {driver.Driver.driverId}
            </p>
        </li>
    );
};

export default DriverStandingsChart;
