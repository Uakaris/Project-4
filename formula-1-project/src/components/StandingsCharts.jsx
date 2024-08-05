import DriverStandingsChart from "./StandingsChart";

// const DriverStandingsList = ({ driverStandings }) => {
//     const standingsListItems = driverStandings.map((driver) => (
//         <DriverStandingsChart key={driver.Driver.driverId} driver={driver} />
//     ));

//     return (
//         <section>
//             <ul className="DriverStandingsList">{standingsListItems}</ul>
//         </section>
//     );
// };

const DriverStandingsList = ({ driverStandings }) => {
    return (
        <section>
            <DriverStandingsChart driverStandings={driverStandings} />
        </section>
    );
};

export default DriverStandingsList;
