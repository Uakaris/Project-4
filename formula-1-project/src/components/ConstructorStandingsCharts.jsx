import ConstructorStandingsChart from "./ConstructorStandingsChart";

const ConstructorStandingsList = ({ constructorStandings }) => {
    return (
        <section>
            <ConstructorStandingsChart
                constructorStandings={constructorStandings}
            />
        </section>
    );
};

export default ConstructorStandingsList;
