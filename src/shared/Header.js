import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LA MEGA-TIENDA</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/src/gestionProducto/pages/CrearProducto.js">Crear Producto</Nav.Link>
                    <Nav.Link href="/src/gestionProducto/pages/GestionarProducto.js">Gestionar Producto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;