import LatestRaceResultsCard from "../components/LatestRaceResultsCard";

const LatestRaceResultsList = (props) => {
    const RaceResultsListItems = props.results.map((results) => (
        <LatestRaceResultsCard key={results.results_number} results={results} />
    ));
    return (
        <section>
            <ul className="LatestRaceResultsList">{RaceResultsListItems}</ul>
        </section>
    );
};

export default LatestRaceResultsList;