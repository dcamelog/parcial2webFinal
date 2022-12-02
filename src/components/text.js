import { Link } from "react-router-dom";
function Mascota(props) {
    return (
        <Link to={"/bandas/" + props.banda.id}>
            <text>{props.banda.name}</text>
        </Link>
    );
}

export default Mascota;