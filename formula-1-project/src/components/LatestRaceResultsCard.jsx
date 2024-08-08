import "../components/LatestRaceResultsCard.css";

const getHeadshotForNumber = (number) => {
    const headshots = {
        1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
        2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png",
        3: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/1col/image.png",
        4: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png",
        10: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png",
        11: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
        14: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png",
        16: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png",
        18: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png",
        20: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png",
        22: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png",
        23: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png",
        24: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png",
        27: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png",
        31: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png",
        44: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
        55: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png",
        63: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
        77: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png",
        81: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png",
    };

    return headshots[number];
};

const LatestRaceResultsCard = ({ results }) => {
    const formatConstructorId = (id) => {
        if (!id) return "N/A";

        const replacedId = id.replace(/_/g, " ");

        const capitalisedId = replacedId
            .split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");

        return capitalisedId;
    };

    const driverNumber = `${results.number}`;
    const headshotUrl = getHeadshotForNumber(driverNumber);

    return (
        <li className="LatestRaceResultsCard">
            <h1 className="ResultNumber">
                {results.position || "No position info available"}
            </h1>
            <img
                className="ResultsImg"
                src={headshotUrl}
                alt={driverNumber || "Driver Number"}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p>
                <strong>
                    {results.Driver.givenName || "N/A"}{" "}
                    {results.Driver.familyName || "N/A"}
                </strong>
            </p>
            <p>
                <strong>
                    {formatConstructorId(results.Constructor.constructorId) ||
                        "N/A"}
                </strong>
            </p>
            <p>
                Points: <strong>{results.points || "N/A"}</strong>
            </p>
            <p>
                Number: <strong>{results.number || "N/A"}</strong>
            </p>
            <p>
                Starting Position:
                <strong>{results.grid || "N/A"}</strong>
            </p>
            <p>
                Status: <strong>{results.status || "N/A"}</strong>
            </p>
            <p>
                Laps Completed: <strong>{results.laps || "N/A"}</strong>
            </p>
        </li>
    );
};

export default LatestRaceResultsCard;
