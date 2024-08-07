import { useState, useEffect } from "react";

import * as apiService from "../Services/apiService";
import LatestRaceResultsList from "./LatestRaceResultsList";

const LatestRaceResultsInfo = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.getLatestRaceResults();
                setResults(data.resultsData || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading)
        return (
            <div className="LoadingContainer">
                <p>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                </p>
            </div>
        );
    if (error)
        return (
            <div className="ErrorContainer">
                <p>
                    <i className="fa-solid fa-triangle-exclamation fa-beat"></i>
                </p>
            </div>
        );

    return (
        <main className="results">
            <h1 className="ResultsHeading">Latest Race Results</h1>
            <LatestRaceResultsList results={results} />
        </main>
    );
};

export default LatestRaceResultsInfo;