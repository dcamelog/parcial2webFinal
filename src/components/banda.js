import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
const { useEffect, useState } = require("react");

export default function Detail() {
    const params = useParams();
    const [banda, setBandas] = useState([]);
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setBandas(data.find(banda => banda.id == params.bandaId));
            });
    }, []);

    return (
        <div class="d-flex justify-content-center">

            <div>

                <Card style={{ width: "16rem", height: "24rem" }} className="mb-3">
                    <Card.Img
                        style={{ height: "14rem" }}
                        variant="center"
                        src={banda.image}
                        alt={banda.description}
                    />
                    <h1>{banda.name}</h1>
                    <Card.Body>

                        <Card.Text>{banda.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}