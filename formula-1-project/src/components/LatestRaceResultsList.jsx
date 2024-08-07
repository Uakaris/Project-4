import LatestRaceResultsCard from "../components/LatestRaceResultsCard";

const LatestRaceResultsList = ({ results }) => {
    const RaceResultsListItems = results.map((results) => (
        <LatestRaceResultsCard key={results.number} results={results} />
    ));
    return (
        <section>
            <ul className="LatestRaceResultsList">{RaceResultsListItems}</ul>
        </section>
    );
};

export default LatestRaceResultsList;