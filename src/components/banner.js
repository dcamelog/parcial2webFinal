import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="ligth">

                <Container>
                    <Image source="https://static.vecteezy.com/system/resources/previews/001/200/758/original/music-note-png.png"></Image>
                    <Navbar.Brand>Bandas Musicales</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;