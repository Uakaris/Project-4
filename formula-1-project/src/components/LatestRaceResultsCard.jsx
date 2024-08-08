import "../components/LatestRaceResultsCard.css";

const getHeadshotForName = (name) => {
    const headshots = {
        "max verstappen":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
        "logan sargeant":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png",
        "daniel ricciardo":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/1col/image.png",
        "lando norris":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png",
        "pierre gasly":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png",
        "sergio perez":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
        "fernando alonso":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png",
        "charles leclerc":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png",
        "lance stroll":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png",
        "kevin magnussen":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png",
        "yuki tsunoda":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png",
        "alexander albon":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png",
        "zhou guanyu":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png",
        "nico hulkenberg":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png",
        "esteban ocon":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png",
        "lewis hamilton":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
        "carlos sainz":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png",
        "george russell":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
        "valtteri bottas":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png",
        "oscar piastri":
            "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png",
    };

    return headshots[name.toLowerCase()] || "http://www.placekitten.com/93/93";
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

    const driverName = `${results.Driver.givenName || ''} ${results.Driver.familyName || ''}`.trim();
    const headshotUrl = getHeadshotForName(driverName);

    return (
        <li className="LatestRaceResultsCard">
            <h2>{results.position || "No position info available"}</h2>
            <img
                src={headshotUrl}
                alt={driverName || "Driver"}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <p>
                <strong>
                    {results.Driver.givenName || "N/A"}{" "}
                    {results.Driver.familyName || "N/A"} -{" "}
                    {formatConstructorId(results.Constructor.constructorId) ||
                        "N/A"}
                </strong>
            </p>
            <p>
                <strong>Points: </strong>
                {results.points || "N/A"}
            </p>
            <p>
                <strong>Number: </strong>
                {results.number || "N/A"}
            </p>
            <p>
                <strong>Starting Position: </strong>
                {results.grid || "N/A"}
            </p>
            <p>
                <strong>Status: </strong>
                {results.status || "N/A"}
            </p>
            <p>
                <strong>Laps Completed: </strong>
                {results.laps || "N/A"}
            </p>
        </li>
    );
};

export default LatestRaceResultsCard;
