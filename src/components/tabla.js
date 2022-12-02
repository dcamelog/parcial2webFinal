import { useParams, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mascota from "./text";

const { useEffect, useState } = require("react");
function Bandas() {
    const [bandas, setBandas] = useState([]);
    let cont = 1;


    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setBandas(data);
            });
    }, []);
    return (

        <Row>
            <Col>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Fundacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bandas.map((banda) => (
                            <tr >
                                <th scope="col">
                                    {cont++}
                                </th>
                                <th scope="col" >
                                    {banda.name}
                                </th>
                                <th scope="col">
                                    {banda.country}
                                </th>
                                <th scope="col">
                                    {banda.genre}
                                </th>
                                <th scope="col">
                                    {banda.foundation_year}
                                </th>
                            </tr>


                        ))}
                    </tbody>
                </table>
            </Col>
            <Col>

            </Col>
        </Row>


    )
}
export default Bandas;