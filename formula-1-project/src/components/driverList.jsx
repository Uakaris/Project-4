import DriverCard from "./driverCard";

const DriverList = (props) => {
    const DriverListItems = props.drivers.map((driver) => (
        <DriverCard key={driver.driver_number} driver={driver} />
    ));
    return (
        <section>
            <ul>{DriverListItems}</ul>
        </section>
    );
};

export default DriverList;
